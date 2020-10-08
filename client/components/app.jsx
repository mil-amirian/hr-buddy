import React from 'react';
import Header from './header';
import LogIn from './view-log-in';
import ShiftsHeader from './shifts-header';
import MainMenu from './view-main-menu';
import AddNewEmployee from './view-add-new-employee';
import ShiftsMenu from './view-shifts';
import ViewEmployee from './view-employee';
import ViewEmployees from './view-employees';
import Hours from './view-hours';
import ViewDepartments from './view-departments';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: 'log-in', // 'log-in'
      currentUser: null,
      employeeToView: null
    };
    this.setView = this.setView.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.selectedUserToView = this.selectedUserToView.bind(this);
  }

  setView(params) {
    this.setState(state => ({
      view: params
    }));
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  getCurrentUser(currentUser) {
    this.setState(state => ({
      currentUser: currentUser
    }));
  }

  selectedUserToView(selectedUser) {
    this.setState(state => ({
      employeeToView: selectedUser
    }));
  }

  render() {
    const header = <Header user={this.state.currentUser} logout={this.setView} employees={this.setView} mainMenu={this.setView} />;
    const shiftsHeader = <ShiftsHeader user={this.state.currentUser} logout={this.setView} employees={this.setView} mainMenu={this.setView} />;

    switch (this.state.view) {
      case 'log-in':
        return (
          <>
            <LogIn setView={this.setView} getCurrentUser={this.getCurrentUser} />
          </>
        );
      case 'view-employees':
        return (
          <>
            {header}
            <ViewEmployees setView={this.setView} getCurrentUser={this.getCurrentUser} selectedUser={this.selectedUserToView}/>
          </>
        );
      case 'main-menu':
        return (
          <>
            {header}
            <MainMenu getCurrentUser={this.getCurrentUser} setView={this.setView}/>
          </>
        );
      case 'add-employee':
        return (
          <>
            {header}
            <AddNewEmployee setView={this.setView} getCurrentUser={this.getCurrentUser} />
          </>
        );
      case 'view-employee':
        return (
          <>
            {header}
            <ViewEmployee getCurrentUser={this.getCurrentUser} selectedUser={this.state.employeeToView} setView={this.setView}/>
          </>
        );
      case 'view-shifts':
        return (
          <>
            {shiftsHeader}
            <ShiftsMenu getCurrentUser={this.getCurrentUser} setView={this.setView}/>
          </>
        );
      case 'view-hours':
        return (
          <>
            {header}
            <Hours getCurrentUser={this.getCurrentUser} />
          </>
        );
      case 'view-departments':
        return (
          <>
            {header}
            <ViewDepartments/>
          </>
        );
    }
  }
}
