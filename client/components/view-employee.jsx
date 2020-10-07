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
          <div className="page-content col-10">
            <div className="title d-flex justify-content-between">
              <button className="col-1 back-btn btn btn-primary ml-3" onClick={() => { this.props.setView('view-employees'); }}>BACK</button>
              <h2 className="col-10 page-title text-center">Viewing {this.state.employee.firstName} {this.state.employee.lastName}</h2>
              <span className="col-1"></span>
            </div>
          </div>
          <form className="col-10 d-flex flex-column align-items-center" onSubmit={this.handleSubmit}>
            <div className="col-11 d-flex flex-column align-items-left section-styling-head">
              <h5 className="row ml-3 mt-1">NAME & JOB TITLE</h5>
              <div className="form-group d-flex justify-content-between ml-1">
                <div className="col-4">
                  <label htmlFor="exampleFormControlInput1">First Name</label>
                  <p className="employee-data">{this.state.employee.firstName}</p>
                </div>
                <div className="col-4">
                  <label htmlFor="exampleFormControlInput1">Last Name</label>
                  <p className="employee-data">{this.state.employee.lastName}</p>

                </div>
                <div className="col-4">
                  <label htmlFor="exampleFormControlInput1">Job Title</label>
                  <p className="employee-data">{this.state.employee.jobTitle}</p>

                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col d-flex mt-3 section-styling">
                <div className="col-12 d-flex flex-column align-items-left">
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
              <div className="col d-flex mt-3 section-styling">
                <div className="col-12 d-flex flex-column align-items-left">
                  <h5 className="row ml-1 mt-1">JOB DETAILS</h5>
                  <div className="form-group d-flex flex-column justify-content-between ml-1">
                    <div className="mt-2">
                      <label htmlFor="exampleFormControlInput1">Wage</label>
                      <p className="employee-data">${this.state.employee.wage} p/h</p>

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
              <div className="col d-flex mt-3 section-styling">
                <div className="col-12 d-flex flex-column align-items-left justify-content-between">
                  <h5 className="ml-1 mt-1">EMPLOYEE PHOTO & ROLE</h5>
                  <div className="form-group d-flex flex-column align-items-center">
                    <div className="row image-bkg">
                      <img className="employee-image" src={this.state.employee.image} alt={this.state.employee.image}/>
                    </div>
                  </div>
                  <div className="row justify-content-center role-section">
                    <div className="form-check form-check-inline">
                      <span className="employee-data-role">{this.state.employee.role}</span>
                    </div>
                  </div>
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
