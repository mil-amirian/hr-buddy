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
        // this.setState({
        //   isClockedIn: true,
        //   shiftId: time.shiftId,
        //   clockIn: time.clockIn,
        //   clockOut: null
        // });
      });
  }

  getClockOut() {
    const post = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state.shiftId)
    };
    fetch('/api/shifts/clockOut', post)
      .then(res => res.json())
      .then(time => {
        this.setState(state => ({
          isClockedin: false,
          shiftId: null,
          clockIn: time.clockIn,
          clockOut: time.clockOut
        }));
      });
  }

  render() {
    const currentTime = new Date();
    const formattedTime = currentTime.toString().slice(0, 24);
    if (!this.state.isClockedIn && !this.state.shiftId) {
      return (
        <>
          <div className="spacer"></div>
          <div className="container d-flex justify-content-center align-items-center flex-column p-2 mt-4">
            <div>
              <button type="button" className="btn btn-success mt-4 clock-in-button" onClick={this.getClockIn}>Clock In</button>
            </div>
            <div className="clock-in-container row d-flex flex-column p-2">
              <h4 id="clock-in-text">You are currently not clocked in</h4>
            </div>
            <div className="">
              <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut} disabled={true}>Clock Out</button>
            </div>
            <div className="clock-out-container row d-flex flex-column p-2">
              <h4 id="clock-out-text">You are currently clocked out</h4>
            </div>
          </div>
        </>
      );
    } else if (this.state.isClockedIn) {
      return (
        <>
          <div className="spacer"></div>
          <div className="container d-flex justify-content-center align-items-center flex-column p-2 mt-4">
            <div>
              <button type="button" className="btn btn-success mt-4 clock-in-button" onClick={this.getClockIn} disabled={true}>Clock In</button>
            </div>
            <div className="clock-in-container row d-flex flex-column p-2">
              <h4 id="clock-in-text">You clocked in at {formattedTime}</h4>
            </div>
            <div className="">
              <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut}>Clock Out</button>
            </div>
            <div className="clock-out-container row d-flex flex-column p-2">
              <h4 id="clock-out-text">You are currently clocked in</h4>
            </div>
          </div>
        </>
      );
    } else if (this.state.clockIn && this.state.clockOut) {
      return (
        <>
          <div className="spacer"></div>
          <div className="container d-flex justify-content-center align-items-center flex-column p-2 mt-4">
            <div>
              <button type="button" className="btn btn-success mt-4 clock-in-button" onClick={this.getClockIn}>Clock In</button>
            </div>
            <div className="clock-in-container row d-flex flex-column p-2">
              <h4 id="clock-in-text">You clocked in at {formattedTime}</h4>
            </div>
            <div className="">
              <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.getClockOut} disabled={true}>Clock Out</button>
            </div>
            <div className="clock-out-container row d-flex flex-column p-2">
              <h4 id="clock-out-text">You clocked out at {formattedTime}</h4>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ShiftsMenu;
