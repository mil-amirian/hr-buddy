import React from 'react';

export default class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: null,
      departments: null
    };
    this.getEmployees = this.getEmployees.bind(this);
    this.getDepartments = this.getDepartments.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  }

  componentDidMount() {
    this.getEmployees();
    this.getDepartments();
  }

  getEmployees() {
    fetch('/api/employees')
      .then(res => res.json())
      .then(employees => {
        this.setState(state => ({
          employees: employees
        }));
      });
  }

  getDepartments() {
    fetch('/api/departments')
      .then(res => res.json())
      .then(departments => {
        // eslint-disable-next-line no-console
        console.log(departments);
        this.setState(state => ({
          departments: departments
        }));
      });
  }

  render() {
    if (this.state.employees) {
      return (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="page-content col-10">
            <div className="row title d-flex justify-content-center">
              <h2 className="page-title">VIEW HOURS</h2>
            </div>
          </div>
          <div className="page-content col-9">
            <div className="title d-flex justify-content-around hours-title align-middle">
              <div>
                <h2>HOURS total for all dept.</h2>
                <span>CalcHOURS</span>
              </div>
              <div>
                <h2>PAY total for all dept.</h2>
                <span>CalcPAY</span>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="mt-4">
                <label htmlFor="exampleFormControlInput1">Departments</label>
                <select className="custom-select" id="employee-select" onChange={this.handleChange}>
                  <option value="default">--select--</option>
                  {this.state.employees.map(employee => {
                    return (
                      <option key={employee.employeeId}>{employee.firstName} {employee.lastName}</option>
                    );
                  })
                  }
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="exampleFormControlInput1">Employees</label>
                <select className="custom-select" id="employee-select" onChange={this.handleChange}>
                  <option value="default">--select--</option>
                  {this.state.employees.map(employee => {
                    return (
                      <option key={employee.employeeId}>{employee.firstName} {employee.lastName}</option>
                    );
                  })
                  }
                </select>
              </div>
            </div>

          </div>
        </div>
      );
    } else {
      return (
        <h1>loading hours...</h1>
      );
    }

  }
}
