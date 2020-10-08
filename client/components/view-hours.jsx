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
        this.setState(state => ({
          departments: departments
        }));
      });
  }

  render() {
    if (this.state.employees && this.state.departments) {
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
              <div className="col">
                <div className="mt-4 d-flex align-items-center">
                  <i className="menu-icon-teams fas fa-users fa-3x mr-4"/>
                  <div>
                    <label htmlFor="exampleFormControlInput1">Departments</label>
                    <select className="custom-select" id="employee-select" onChange={this.handleChange}>
                      <option value="default">--select--</option>
                      {this.state.departments.map(department => {
                        return (
                          <option key={department.departmentId}>{department.department}</option>
                        );
                      })
                      }
                    </select>
                  </div>
                </div>
                <div className="hours-container d-flex flex-column justify-content-around mt-5">
                  <div>
                    <h5>HOURS total for TEAM</h5>
                    <span>CalcHOURS Hrs.</span>
                  </div>
                  <div>
                    <h5 className="mt-4">PAY total for TEAM</h5>
                    <span>$ CalcPAY</span>
                  </div>
                  <div>
                    <h5 className="mt-4">PAY ratio for TEAM</h5>
                    <span>Ratio %</span>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="mt-4 d-flex align-items-center">
                  <i className="menu-icon-emp fa fa-user fa-3x mr-4" />
                  <div>
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
                <div className="hours-container d-flex flex-column justify-content-around mt-5">
                  <div>
                    <h5>HOURS total for EMPLOYEE</h5>
                    <span>CalcHOURS Hrs.</span>
                  </div>
                  <div>
                    <h5 className="mt-4">PAY total for EMPLOYEE</h5>
                    <span>$ CalcPAY</span>
                  </div>
                  <div>
                    <h5 className="mt-4">EMPLOYEE is part of team</h5>
                    <span>Employee Team Name</span>
                  </div>
                  <div>
                    <h5 className="mt-4">EMPLOYEE pay ratio of team</h5>
                    <span>Ratio %</span>
                  </div>
                </div>
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
