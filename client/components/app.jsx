import React from 'react';
import Header from './header';
import LogIn from './view-log-in';
import GetEmployees from './view-employees';
import ShiftsHeader from './shifts-header';
import MainMenu from './view-main-menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: 'log-in',
      currentUser: null
    };
    this.setView = this.setView.bind(this);
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

  getCurrentUser(firstName, lastName) {
    this.setState(state => ({
      currentUser: {
        firstName: firstName,
        lastName: lastName
      }
    }));
  }

  render() {
    const header = <Header user="Sample User" logout={this.setView} employees={this.setView} mainMenu={this.setView} />;
    const shiftsHeader = <ShiftsHeader user="Sample User" logout={this.setView} employees={this.setView} mainMenu={this.setView} />;

    switch (this.state.view) {
      case 'log-in':
        return (
          <>
            {header}
            <LogIn setView={this.setView}/>
          </>
        );
      case 'view-employees':
        return (
          <>
            {header}
            <GetEmployees />
          </>
        );
      case 'main-menu':
        return (
          <>
            {header}
            <MainMenu />
          </>
        );
      case 'add-employee':
        return (
          <>
            {header}
            <GetEmployees />
          </>
        );
      case 'view-employee':
        return (
          <>
            {header}
            <GetEmployees />
          </>
        );
      case 'view-shifts':
        return (
          <>
            {shiftsHeader}
            <GetEmployees />
          </>
        );
      case 'view-hours':
        return (
          <>
            {header}
            <GetEmployees />
          </>
        );
      case 'view-departments':
        return (
          <>
            {header}
            <GetEmployees />
          </>
        );
    }
  }
}
