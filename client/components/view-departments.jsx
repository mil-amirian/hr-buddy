import React from 'react';
import EachEmployee from './individual-employee';
import DeptModal from './dept-modal';

export default class ViewDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: null,
      employees: null,
      selectedDept: null,
      show: true
    };
    this.getDepartments = this.getDepartments.bind(this);
    this.getEmployees = this.getEmployees.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
    this.getEmployees();
    this.showModal();
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

  getEmployees() {
    fetch('api/employees')
      .then(res => res.json())
      .then(employees => {
        this.setState(state => ({
          employees: employees
        }));
      });
  }

  showModal(e) {
    this.setState({
      show: !this.state.show
    });
    // eslint-disable-next-line no-console
    // console.log(e.target.value);
  }

  render() {
    if (this.state.departments && !this.state.show) {
      return (
        <>
          <main className="d-flex justify-content-center mb-4">
            <div className="page-content col-10">
              <button className="col-1 back-btn btn btn-primary mt-3" onClick={() => { this.props.setView('main-menu'); }}>BACK</button>
              <div className="box-shadow title d-flex justify-content-center">
                <h2 className="page-title align-items-center">DEPARTMENTS</h2>
              </div>
              <div className="d-flex justify-content-center mt-3 members-title">
                <h2>
                  MEMBERS
                </h2>
              </div>
            </div>
          </main>
          <div className="">
            <div className="col d-flex justify-content-center">
              <div className="row d-flex flex-wrap flex-row justify-content-center">
                {
                  this.state.departments.map(department => {
                    return (
                      <div key={department.departmentId} className='department-box' onClick={e => { this.showModal(e); }}>
                        <div className="">
                          <div className="bubble justify-content-center">
                            <h4 className="d-flex justify-content-center">{department.department}</h4>
                            <h1 className="d-flex mb-1 dep-qty justify-content-center">{department.numbersOfPeople}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.departments && this.state.show) {
      return (
        <>
          <main className="d-flex justify-content-center mb-4">
            <div className="page-content col-10">
              <button className="col-1 back-btn btn btn-primary mt-3" onClick={() => { this.props.setView('main-menu'); }}>BACK</button>
              <div className="box-shadow title d-flex justify-content-center">
                <h2 className="page-title align-items-center">DEPARTMENTS</h2>
              </div>
              <div className="d-flex justify-content-center mt-3 members-title">
                <h2>
                  MEMBERS
                </h2>
              </div>
            </div>
          </main>
          <div className="">
            <div className="col d-flex justify-content-center">
              <div className="row d-flex flex-wrap flex-row justify-content-center">
                {
                  this.state.departments.map(department => {
                    return (
                      <div key={department.departmentId} className='department-box' onClick={e => { this.showModal(e); }}>
                        <div className="">
                          <div className="bubble justify-content-center">
                            <h4 className="d-flex justify-content-center">{department.department}</h4>
                            <h1 className="d-flex mb-1 dep-qty justify-content-center">{department.numbersOfPeople}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <DeptModal onClose={this.showModal} show={this.state.show}>
            <main className="d-flex justify-content-center mb-4 modal-page">
              <div className="page-content col-10 modal-table">
                <div className="shadow title-modal d-flex justify-content-center">
                  <h2 className="page-title">EMPLOYEES</h2>
                </div>
                <div className="table-container">
                  <table className="shadow table table-striped mb-2 border rounded">
                    <thead className="alert alert-dark table-headers">
                      <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.employees.map(employee => {
                          return (
                            <EachEmployee firstName={employee.firstName} lastName={employee.lastName} employeeId={employee.employeeId} jobTitle={employee.jobTitle} department={employee.department} key={employee.employeeId} selectedUser={() => { this.props.selectedUser(employee.employeeId); }} setView={this.props.setView} deleteEmployee={this.deleteEmployee} />
                          );
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </DeptModal>
        </>
      );
    } else {
      return (
        <h1>Loading departments...</h1>
      );
    }
  }
}
