import React from 'react';

export default function MainMenu(props) {
  return (
    <>
      <div className="spacer"></div>
      <div className="container align-items-center">
        <div className="row">
          <div className="menu-item col-md-5 p-2 border border-dark rounded m-2">
            <i className="fas fa-address-card fa-7x"/>
            <h2>View Employees</h2>
          </div>
          <div className="menu-item col-md-5 p-2 border border-dark rounded m-2">
            <i className="fas fa-users fa-7x"/>
            <h2>View Departments</h2>
          </div>
        </div>
        <div className="row">
          <div className="menu-item col-md-5 p-2 border border-dark rounded m-2">
            <i className="fa fa-user-plus fa-7x" />
            <h2>Add Employee</h2>
          </div>
          <div className="menu-item col-md-5 p-2 border border-dark rounded m-2">
            <i className="fas fa-money-check-alt fa-7x" />
            <h2>View Hours</h2>
          </div>
        </div>
      </div>
    </>
  );
}
