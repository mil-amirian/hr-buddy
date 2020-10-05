import React from 'react';
import Header from './header';
import LogIn from './view-log-in';
import GetEmployees from './view-employees';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: 'log-in',
      currentUser: {
        firstName: null,
        lastName: null
      }
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

  render() {
    switch (this.state.view) {
      case 'log-in':
        return (
          <>
            <Header user="Sample User" logout={this.setView} />
            <GetEmployees />
          </>
        );
    }
  }
}
