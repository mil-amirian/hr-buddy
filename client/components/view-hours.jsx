import React from 'react';

export default class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: null,
      departments: null,
      selectedEmployee: null,
      selectedDepartment: null,
      allHours: null
    };
    this.getEmployees = this.getEmployees.bind(this);
    this.getDepartments = this.getDepartments.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAllHours = this.getAllHours.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'department-select') {
      for (let i = 0; i < this.state.departments.length; i++) {
        if (this.state.departments[i].department === event.target.value) {
          fetch(`api/hours/dept/${this.state.departments[i].departmentId}`)
            .then(res => res.json())
            .then(department => {
              this.setState(state => ({
                selectedDepartment: department
              }));
            });
        }
      }

    } else if (event.target.id === 'employee-select') {
      for (let i = 0; i < this.state.employees.length; i++) {
        if (`${this.state.employees[i].firstName} ${this.state.employees[i].lastName}` === event.target.value) {
          fetch(`api/hours/emp/${this.state.employees[i].employeeId}`)
            .then(res => res.json())
            .then(employee => {
              this.setState(state => ({
                selectedEmployee: employee
              }));
            });
        }
      }
    }
  }

  componentDidMount() {
    this.getEmployees();
    this.getDepartments();
    this.getAllHours();
  }

  getAllHours() {
    fetch('/api/hours')
      .then(res => res.json())
      .then(allHours => {
        this.setState(state => ({
          allHours: allHours
        }));
      });
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

  departmentSection() {
    if (this.state.selectedDepartment) {
      return (
        <div className="hours-container d-flex flex-column justify-content-around mt-5">
          <div>
            <h5>HOURS total for TEAM</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hourglass-bottom mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
              </svg>
              {(this.state.selectedDepartment.totalHours).toFixed(2)} Hrs.</span>
          </div>
          <div>
            <h5 className="mt-4">PAY total for TEAM</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cash-stack mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
                <path fillRule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
                <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
                      ${parseFloat((this.state.selectedDepartment.totalPay).toFixed(0)).toLocaleString('en')}</span>
          </div>
          <div>
            <h5 className="mt-4">PAY ratio for TEAM</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-diagram-3-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/>
              </svg>
              {((this.state.selectedDepartment.totalPay / this.state.allHours.totalPay) * 100).toFixed(2)}%</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hours-container d-flex flex-column justify-content-around mt-5">
          <div>
            <h5>HOURS total for TEAM</h5>
            <span>-- Select a department from above to view --</span>
          </div>
          <div>
            <h5 className="mt-4">PAY total for TEAM</h5>
            <span>-- Select a department from above to view --</span>
          </div>
          <div>
            <h5 className="mt-4">PAY ratio for TEAM</h5>
            <span>-- Select a department from above to view --</span>
          </div>
        </div>
      );
    }
  }

  employeeSection() {
    if (this.state.selectedEmployee) {
      return (
        <div className="hours-container d-flex flex-column justify-content-around mt-5">
          <div>
            <h5>HOURS total for EMPLOYEE</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hourglass-bottom mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
              </svg>
              {(this.state.selectedEmployee.totalHours).toFixed(2)} Hrs.</span>
          </div>
          <div>
            <h5 className="mt-4">PAY total for EMPLOYEE</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cash-stack mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
                <path fillRule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
                <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg>
                ${parseFloat((this.state.selectedEmployee.totalPay).toFixed(0)).toLocaleString('en')}
            </span>
          </div>
          <div>
            <h5 className="mt-4">EMPLOYEE is part of team</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
              {this.state.selectedEmployee.department}</span>
          </div>
          <div>
            <h5 className="mt-4">EMPLOYEE pay ratio in team</h5>
            <span className="department-qty">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-diagram-3-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/>
              </svg>
              {((this.state.selectedEmployee.totalPay / this.state.allHours.totalPay) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hours-container d-flex flex-column justify-content-around mt-5">
          <div>
            <h5>HOURS total for EMPLOYEE</h5>
            <span>-- Select an employee from above to view --</span>
          </div>
          <div>
            <h5 className="mt-4">PAY total for EMPLOYEE</h5>
            <span>-- Select an employee from above to view --</span>
          </div>
          <div>
            <h5 className="mt-4">EMPLOYEE is part of team</h5>
            <span>-- Select an employee from above to view --</span>
          </div>
          <div>
            <h5 className="mt-4">EMPLOYEE pay ratio of team</h5>
            <span>-- Select an employee from above to view --</span>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.employees && this.state.departments && this.state.allHours) {
      return (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="page-content col-10">
            <div className="row shadow title d-flex justify-content-center">
              <h2 className="page-title">VIEW HOURS</h2>
            </div>
          </div>
          <div className="page-content col-9">
            <div className="title d-flex justify-content-around hours-title align-middle">
              <div>
                <h2 className="all-dept">HOURS total for all dept.</h2>
                <span className="department-qty all-dept">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hourglass-bottom mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
                  </svg>
                  {(this.state.allHours.totalHours).toFixed(2)} Hrs for all employees</span>
              </div>
              <div>
                <h2 className="all-dept">PAY total for all dept.</h2>
                <span className="department-qty all-dept">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cash-stack mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"/>
                    <path fillRule="evenodd" d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"/>
                    <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                  </svg>
                    ${parseFloat((this.state.allHours.totalPay).toFixed(0)).toLocaleString('en')} for all employees
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <div className="col">
                <div className="mt-4 d-flex align-items-center">
                  <i className="menu-icon-teams fas fa-users fa-3x mr-4"/>
                  <div>
                    <label htmlFor="exampleFormControlInput1">Departments</label>
                    <select className="custom-select" id="department-select" onChange={this.handleChange}>
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
                {
                  this.departmentSection()
                }
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
                {
                  this.employeeSection()
                }
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
