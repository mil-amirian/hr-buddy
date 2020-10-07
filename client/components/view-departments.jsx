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
    return (
      <main className="d-flex justify-content-center mb-4">
        <div className="page-content col-10">
          <div className="title d-flex justify-content-center">
            <h2 className="page-title">View Employees</h2>
          </div>
        </div>
      </main>

    );

  }

}
