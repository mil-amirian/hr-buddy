require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const multer = require('multer');
// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
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

app.post('/api/upload', upload.single('avatar'), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // console.log(req.file);
  // console.log(req.body);
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
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

  if (!firstName || !lastName || !email || !phone || !street || !city || !state || !zip || !jobTitle || !role ||
    !image || !wage || !contract || !inductionDate || !startDate || !qualifications || !departmentId) {
    res.status(400).json({
      error: 'You need to add values into every input field'
    });
  } else {
    db.query(postInput, values)
      .then(result => {

        res.status(201).json(result.rows[0]);
      }
      )
      .catch(err => {
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
        console.error(err);
      });
  }
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
