import React from 'react';
import EachEmployee from './individual-employee';

export default class ViewEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: null,
      deleteConfirmation: 'no'
    };
    this.getEmployees = this.getEmployees.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    fetch('api/employees')
      .then(res => res.json())
      .then(employees => {
        this.setState(state => ({
          employees: employees
        }));
      });
  }

  deleteEmployee(employeeId) {
    const index = this.state.employees.findIndex(employee => employee.employeeId === employeeId);
    fetch(`/api/employees/${employeeId}`, {
      method: 'DELETE'
    })
      .then(response => {
        const updatedEmployees = this.state.employees.slice();
        updatedEmployees.splice(index, 1);
        this.setState({ employees: updatedEmployees });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.deleteConfirmation === 'no') {
      if (this.state.employees) {
        return (
          <main className="d-flex justify-content-center mb-4">
            <div className="page-content col-10">
              <button className="col-1 back-btn btn btn-primary ml-3" onClick={() => { this.props.setView('main-menu'); }}>BACK</button>
              <div className="shadow title d-flex justify-content-center">
                <h2 className="page-title">EMPLOYEES</h2>
              </div>
              <div className="table-container">
                <div className="add-button-container d-flex justify-content-end mb-4 mt-4">
                  <button className="btn btn-success" onClick={() => { this.props.setView('add-employee'); }}>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-plus-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                                      Add Employee
                  </button>
                </div>
                <table className="shadow table table-striped mb-4 border rounded">
                  <thead className="alert alert-dark table-headers">
                    <tr>
                      <th scope="col">Employee ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.employees.map(employee => {
                        return (
                          <EachEmployee firstName={employee.firstName} lastName={employee.lastName} employeeId={employee.employeeId} jobTitle={employee.jobTitle} key={employee.employeeId} selectedUser={() => { this.props.selectedUser(employee.employeeId); }} setView={this.props.setView} deleteEmployee={this.deleteEmployee}/>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        );
      } else {
        return (
          <h1>Loading employees...</h1>
        );
      }
    }

  }
}
