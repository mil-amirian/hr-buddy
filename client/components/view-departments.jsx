import React from 'react';

export default class ViewDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: null
    };
    this.getDepartments = this.getDepartments.bind(this);
  }

  componentDidMount() {
    this.getDepartments();
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
    if (this.state.departments) {
      return (
        <>
          <main className="d-flex justify-content-center mb-4">
            <div className="page-content col-10">
              <div className="title d-flex justify-content-center">
                <h2 className="page-title">View Employees</h2>
              </div>
            </div>
          </main>
          <div className=" col-3 d-flex">
            {
              this.state.departments.map(department => {
                return (
                  <div key={department.departmentId} className='container'>
                    <div className="row align-items-start">
                      <div className="col bubble">
                        <h4 > {department.department} Departments</h4>
                        <h6>Members in deparment {department.numbersOfPeople}</h6>
                      </div>
                    </div>
                  </div>

                );
              })
            }
          </div>
        </>
      );
    } else {
      return (
        <h1>Loading departments...</h1>
      );
    }
  }
}
