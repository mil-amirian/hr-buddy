import React from 'react';

export default function MainMenu(props) {
  return (
    <>
      {/* <div className="menu-spacer"></div> */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div className="page-content col-10">
          <div className="shadow title d-flex justify-content-center">
            <h2 className="page-title">{'MAIN MENU'}</h2>
          </div>
        </div>
      </div>

      <div className="container align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="menu-item col-md-5 m-4" onClick={() => { props.setView('view-employees'); }}>
            <i className="menu-icon fas fa-address-card fa-7x"/>
            <h2>View Employees</h2>
          </div>
          <div className="menu-item col-md-5 m-4" onClick={() => { props.setView('view-departments'); }}>
            <i className="menu-icon fas fa-users fa-7x"/>
            <h2>View Departments</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="menu-item col-md-5 m-4" onClick={() => { props.setView('add-employee'); }}>
            <i className="menu-icon fa fa-user-plus fa-7x" />
            <h2>Add Employee</h2>
          </div>
          <div className="menu-item col-md-5 m-4"onClick={() => { props.setView('view-hours'); }}>
            <i className="menu-icon fas fa-money-check-alt fa-7x"/>
            <h2>View Payroll</h2>
          </div>
        </div>
      </div>
    </>
  );
}
