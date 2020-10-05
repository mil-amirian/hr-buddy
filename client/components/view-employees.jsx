import React from 'react';

export default class ViewEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getEmployees = this.getEmployees.bind(this);
  }

  componentDidMount() {

  }

  getEmployees() {
    // fetch request here
  }

  render() {
    return (
      <main className="d-flex justify-content-center">
        <div className="page-content col-7">
          <div className="title d-flex justify-content-center">
            <h2 className="page-title">View Employees</h2>
          </div>
          <div className="table-container">
            <div className="add-button-container d-flex justify-content-end mb-4 mt-4">
              <button className="btn btn-success">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-plus-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              Add Employee
              </button>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Employee ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button className="btn btn-primary">
                      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-badge mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10.795a4.2 4.2 0 0 1 .776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 0 1 .776.492V2.5A1.5 1.5 0 0 0 11.5 1h-7z"/>
                        <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}
