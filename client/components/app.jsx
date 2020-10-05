import React from 'react';
import Header from './header';
import LogIn from './view-log-in';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      currentUser: {
        firstName: null,
        lastName: null
      }
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div>
        <Header user="Sample User" />
        <LogIn setView={this.setView} />
      </div>
    );
  }
}
