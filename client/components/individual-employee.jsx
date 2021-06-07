import React from 'react';

export default class EachEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false
    };
    this.actionViewButton = this.actionViewButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);

  }

  actionViewButton(props) {
    props.selectedUser();
    props.setView('view-employee');
  }

  deleteButton(props) {
    if (!this.state.confirm) {
      return (
        <button className="view-buttons btn btn-danger ml-2" onClick={() => {
          this.setState({
            confirm: true
          });
        }} >DELETE</button>
      );

    } else if (this.state.confirm) {
      return (
        <button className="view-buttons btn btn-warning ml-2" onClick={() => {
          this.setState({
            confirm: false
          });
          props.deleteEmployee(props.employeeId);
        }} >Confirm</button>
      );
    }
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.employeeId}</th>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.jobTitle}</td>
        <td>{this.props.department}</td>
        <td>
          <div className="buttons">
            <button className="btn btn-primary view" onClick={() => { this.actionViewButton(this.props); }} >
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-badge mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.5zM4.5 1A1.5 1.5 0 0 0 3 2.5v10.795a4.2 4.2 0 0 1 .776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 0 1 .776.492V2.5A1.5 1.5 0 0 0 11.5 1h-7z" />
                <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
              </svg>
                  View
            </button>
            {this.deleteButton(this.props)}
          </div>
        </td>
      </tr>
    );
  }
}
