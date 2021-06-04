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
                      <div key={department.departmentId} className='department-box'>
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
    } else {
      return (
        <h1>Loading departments...</h1>
      );
    }
  }
}
