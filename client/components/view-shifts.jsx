import React from 'react';

class ShiftsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftId: null,
      isClockedIn: false,
      clockIn: null,
      clockOut: null,
      employeeId: this.props.employeeId
    };
    this.getClockOut = this.getClockOut.bind(this);
    this.getClockIn = this.getClockIn.bind(this);
  }

  getClockIn() {
    const post = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        employeeId: this.state.employeeId
      })
    };
    fetch('/api/shifts/clockIn', post)
      .then(res => res.json())
      .then(time => {
        this.setState({
          isClockedIn: true,
          shiftId: time.shiftId,
          clockIn: time.clockIn,
          clockOut: null
        });
      });
  }

  getClockOut() {
    const put = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        shiftId: this.state.shiftId
      })
    };
    fetch('/api/shifts/clockOut', put)
      .then(res => res.json())
      .then(time => {
        this.setState(state => ({
          isClockedIn: false,
          clockIn: time.clockIn,
          clockOut: time.clockOut
        }));
      });
  }

  render() {
    if (!this.state.isClockedIn && !this.state.shiftId) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <div className="shifts-container shadow col-8 p-5 d-flex justify-content-center align-items-center flex-column p-2 mt-4">
              <div className="">
                <button type="button" className="btn btn-success mt-4 clock-in-button align-items-center" onClick={this.getClockIn}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
                  Clock In</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-in-text">You are currently not clocked in</h4>
              </div>
              <div className="">
                <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut} disabled={true}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-left mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                  </svg>
                  Clock Out</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-out-text">You are currently clocked out</h4>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.isClockedIn) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <div className="shifts-container shadow col-8 p-5 d-flex justify-content-center align-items-center flex-column p-2 mt-4">
              <div className="">
                <button type="button" className="btn btn-success mt-4 clock-in-button align-items-center" onClick={this.getClockIn} disabled={true}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
                  Clock In</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-in-text">You clocked in at {this.state.clockIn}</h4>
              </div>
              <div className="">
                <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-left mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                  </svg>
                  Clock Out</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-out-text">You are currently clocked out</h4>
              </div>
            </div>
          </div>
        </>
      );
    } else if (this.state.clockIn && this.state.clockOut) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <div className="shifts-container shadow col-8 p-5 d-flex justify-content-center align-items-center flex-column p-2 mt-4">
              <div className="">
                <button type="button" className="btn btn-success mt-4 clock-in-button align-items-center" onClick={this.getClockIn}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
                  Clock In</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-in-text">You clocked in at {this.state.clockIn}</h4>
              </div>
              <div className="">
                <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut} disabled={true}>
                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-left mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                  </svg>
                  Clock Out</button>
              </div>
              <div className="clock-in-container col-6 row d-flex flex-column p-2 mt-2 align-middle">
                <h4 id="clock-out-text">You clocked out at {this.state.clockOut}</h4>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ShiftsMenu;
