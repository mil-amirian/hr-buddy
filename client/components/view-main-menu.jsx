import React from 'react';

export default function MainMenu(props) {
  return (
    <>
      <div className="spacer"></div>
      <div className="container align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="menu-item col-md-5 border border-light m-2">
            <i className="menu-icon fas fa-address-card fa-7x"/>
            <h2>View Employees</h2>
          </div>
          <div className="menu-item col-md-5 border border-light m-2">
            <i className="menu-icon fas fa-users fa-7x"/>
            <h2>View Departments</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="menu-item col-md-5 border border-light m-2">
            <i className="menu-icon fa fa-user-plus fa-7x" />
            <h2>Add Employee</h2>
          </div>
          <div className="menu-item col-md-5 border border-light m-2">
            <i className="menu-icon fas fa-money-check-alt fa-7x" />
            <h2>View Hours</h2>
          </div>
        </div>
      </div>
    </>
  );
}
