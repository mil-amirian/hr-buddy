import React from 'react';

export default class ViewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.selectedUser);
  }

  getEmployee(employeeId) {
    fetch(`api/employees/${employeeId}`)
      .then(res => res.json())
      .then(employee => {
        this.setState(state => ({
          employee: employee
        }));
      });
  }

  render() {
    if (this.state.employee) {
      return (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="col-10 no-padding">
            <button className="col-1 back-btn btn btn-primary mt-3" onClick={() => { this.props.setView('view-employees'); }}>BACK</button>
            <div className="shadow title d-flex justify-content-center">
              <h2 className="col-10 page-title text-center justify-content-center align-items-center"><b>{this.state.employee.firstName} {this.state.employee.lastName} - {this.state.employee.jobTitle}</b></h2>
            </div>
          </div>
          <form className="col-10 shadow d-flex flex-column align-items-center" onSubmit={this.handleSubmit}>
            <div className="col-10 d-flex justify-content-between no-padding">
              <div className="col-3 d-flex mt-3 section-styling align-items-center justify-content-center">
                <div className="col-10 d-flex flex-column">
                  <h5 className="row ml-1 mt-1">CONTACT DETAILS</h5>
                  <div className="form-group d-flex flex-column justify-content-between ml-1">
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Street</label>
                      <p className="employee-data">{this.state.employee.street}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">City</label>
                      <p className="employee-data">{this.state.employee.city}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">State</label>
                      <p className="employee-data">{this.state.employee.state}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Zip Code</label>
                      <p className="employee-data">{this.state.employee.zip}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Email</label>
                      <p className="employee-data">{this.state.employee.email}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Phone</label>
                      <p className="employee-data">{this.state.employee.phone}</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex mt-3 section-styling align-items-center justify-content-center">
                <div className="col-10 d-flex flex-column align-items-left">
                  <h5 className="row ml-1 mt-1">JOB DETAILS</h5>
                  <div className="form-group d-flex flex-column justify-content-between ml-1">
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Wage</label>
                      <p className="employee-data">${this.state.employee.wage}/hr</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Department</label>
                      <p className="employee-data">{this.state.employee.department}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Contract</label>
                      <p className="employee-data">{this.state.employee.contract}</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Start Date</label>
                      <p className="employee-data">{
                        this.state.employee.startDate.slice(0, 10)
                      }</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Induction Date</label>
                      <p className="employee-data">{
                        this.state.employee.inductionDate.slice(0, 10)
                      }</p>

                    </div>
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Qualifications</label>
                      <p className="employee-data">{this.state.employee.qualifications}</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex mt-3 flex-column section-styling align-items-center justify-content-between">
                <h5 className="ml-1 mt-1">EMPLOYEE PHOTO & ROLE</h5>
                <div className="form-group d-flex flex-column align-items-center">
                  <img className="employee-image" src={this.state.employee.image} alt={this.state.employee.image} />
                </div>
                <div className="row justify-content-center role-section">
                  <span className="employee-data-role">{this.state.employee.role}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <h1>Loading employee...</h1>
      );
    }

  }
}
