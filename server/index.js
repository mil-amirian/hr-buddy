require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './server/public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/employees', (req, res, next) => {
  const sql = `
    select "employeeId",
            "firstName",
           "lastName",
           "jobTitle",
           "street",
           "city",
           "state",
           "email",
           "phone",
           "wage",
           "contract",
           "inductionDate",
           "startDate",
           "qualifications",
           "image",
           "role",
           "departments"."name" as "department"
      from "employees"
      join "departments" using ("departmentId")
    `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/employees/:employeeId', (req, res, next) => {
  const sql = `
    select *,
            "departments"."name" as "department"
      from "employees"
      join "departments" using ("departmentId")
      where "employeeId" = $1
  `;
  const value = [parseInt(req.params.employeeId, 10)];
  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.json(result.rows[0]);
      } else {
        next(new ClientError(`employee ${value} does not exist`, 404));
      }
    })
    .catch(err => next(err));
});

app.get('/api/departments', (req, res, next) => {
  const sql = `
  select count ("firstName") as "numbersOfPeople",
      "departments"."name" as "department",
      "departments"."departmentId"
  from "employees"
  join "departments" using ("departmentId")
  group by "departments"."name", "departments"."departmentId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/upload', upload.single('avatar'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    next(new ClientError('please upload a photo', 404));
  }
  res.json(file);
});

app.post('/api/employees', (req, res) => {
  const {
    firstName, lastName, email, phone, street, city, state, zip, jobTitle, role,
    image, wage, contract, inductionDate, startDate, qualifications, departmentId
  } = req.body;
  const postInput = `
  insert into employees ("firstName", "lastName", "email", "phone", "street", "city", "state", "zip", "jobTitle",
            "role", "image" ,"wage", "contract", "inductionDate", "startDate", "qualifications", "departmentId")
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
  returning "firstName", "lastName", "email", "phone", "street", "city", "state", "zip", "jobTitle",
            "role", "image" ,"wage", "contract", "inductionDate", "startDate", "qualifications", "departmentId"

  `;
  const values = [firstName, lastName, email, phone, street, city, state, zip, jobTitle, role,
    image, wage, contract, inductionDate, startDate, qualifications, departmentId];

  if (values.every(v => !v)) {
    res.status(400).json({
      error: 'Please fill out the entire form'
    });
  } else {
    db.query(postInput, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
        console.error(err);
      });
  }
});

app.delete('/api/employees/:employeeId', (req, res) => {
  const employeeId = parseInt(req.params.employeeId, 10);
  const sql = `
    delete from "employees"
    where "employeeId" = $1
    returning *
  `;
  const value = [employeeId];
  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.status(204).send(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find employee with id ${employeeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Hours and PAY for all Departments
app.get('/api/hours', (req, res) => {
  const sql = `
  select SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) as "totalHours",
       avg("e"."wage") as "avgWage",
       SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) * avg("e"."wage") as "totalPay"
from "shifts" as "s"
join "employees" as "e" using ("employeeId")
where "clockOut" IS NOT null
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Hours per employee
app.get('/api/hours/emp/:employeeId', (req, res) => {
  const employeeId = parseInt(req.params.employeeId, 10);
  const sql = `
  select "employeeId", "departmentId", "name" as "department",
       SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) as "totalHours",
       avg("e"."wage") as "wage",
       SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) * avg("e"."wage") as "totalPay"
from "shifts" as "s"
join "employees" as "e" using ("employeeId")
join "departments" using ("departmentId")
where "employeeId" = $1
group by "employeeId", "departmentId", "name"
  `;

  const value = [employeeId];
  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find employee with id ${employeeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Hours per department
app.get('/api/hours/dept/:departmentId', (req, res) => {
  const departmentId = parseInt(req.params.departmentId, 10);
  const sql = `
  select "departmentId", "name" as "department",
       SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) as "totalHours",
       avg("e"."wage") as "avgWage",
       SUM(EXTRACT(EPOCH FROM ("s"."clockOut" -"s"."clockIn" ))/3600) * avg("e"."wage") as "totalPay"
from "employees" as "e"
join "shifts" as "s" using ("employeeId")
join "departments" using ("departmentId")
where "departmentId" = $1
and "departmentId" IS NOT NULL
group by "departmentId", "name"
  `;
  const value = [departmentId];
  db.query(sql, value)
    .then(result => {
      if (result.rows[0]) {
        res.json(result.rows[0]);
      } else {
        res.status(404).json({
          error: `Cannot find department with id ${departmentId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/shifts/clockOut', (req, res) => {
  const sql = `
  update "shifts"
  set "clockOut" = now()
  where "shiftId" = $1
  returning *
  `;
  const val = [parseInt(req.body.shiftId, 10)];
  db.query(sql, val)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
