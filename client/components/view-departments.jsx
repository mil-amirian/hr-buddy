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
              <div className="shadow title d-flex justify-content-between">
                <button className="col-1 back-btn btn btn-primary ml-3" onClick={() => { this.props.setView('main-menu'); }}>BACK</button>
                <h2 className="page-title">VIEW EMPLOYEES</h2>
                <span className="col-1"></span>

              </div>
            </div>
          </main>
          <div className="">
            <div className="col d-flex justify-content-center">
              <div className="row d-flex flex-wrap flex-row justify-content-center">
                {
                  this.state.departments.map(department => {
                    return (
                      <div key={department.departmentId} className='department-box m-1'>
                        <div className="">
                          <div className="bubble">
                            <h4 > {department.department} Department</h4>
                            <h6>Members in deparment</h6>
                            <h1 className="mb-5 dep-qty">{department.numbersOfPeople}</h1>
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
    } else {
      return (
        <h1>Loading departments...</h1>
      );
    }
  }
}
