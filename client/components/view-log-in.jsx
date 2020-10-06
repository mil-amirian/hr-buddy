import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      currentUser: 'default'
    };
    this.getEmployees = this.getEmployees.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getEmployees();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      currentUser: event.target.value
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

  render() {
    return (
      <>
        <div className="spacer"></div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            <img className="d-flex justify-content-lg-center align-items-center" src="./images/hr-buddy-logo.png"></img>
          </div>
          <div className="row d-flex flex-column justify-content-center mt-4">
            <h2>Login to your account</h2>
            <div className="input-group mt-4">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="employee-select">Select User</label>
              </div>
              <select className="custom-select" id="employee-select" onChange={this.handleChange}>
                <option value="default">--select--</option>
                {this.state.employees.map(employee => {
                  return (
                    <option key={employee.firstName}>{employee.firstName} {employee.lastName}</option>
                  );
                })
                }
              </select>
            </div>
            <div className="d-flex flex-column justify-content-center mt-4">
              <button type="button" className="btn btn-primary view" onClick={() => { this.props.setView('main-menu'); }}>Login Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogIn;
