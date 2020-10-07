import React from 'react';

class ShiftsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClockIn = this.handleClockIn.bind(this);
    this.handleClockOut = this.handleClockOut.bind(this);
  }

  handleClockIn(event) {
    const clockInText = document.getElementById('clock-in-text');
    const clockOutText = document.getElementById('clock-out-text');
    const currentTime = new Date();
    if (clockOutText.textContent === 'You are currently clocked out') {
      clockOutText.textContent = 'You are currently clocked in';
      clockInText.textContent = 'You clocked in at' + currentTime;
    }
  }

  handleClockOut(event) {
    const clockOutText = document.getElementById('clock-out-text');
    if (clockOutText.textContent === 'You are currently clocked in') {
      clockOutText.textContent = 'You are currently clocked out';
    }
  }

  render() {
    return (
      <>
        <div className="spacer"></div>
        <div className="container d-flex justify-content-center align-items-center flex-column p-2 mt-4">
          <div className="clock-in-container row d-flex flex-column">
            <button type="button" className="btn btn-success mt-2" onClick={this.handleClockIn}>Clock In</button>
            <h4 id="clock-in-text">You clocked in at [insert time]</h4>
          </div>
          <div className="clock-out-container row d-flex flex-column p-2 mt-4">
            <button type="button" className="btn btn-danger mt-2" onClick={this.handleClockOut}>Clock Out</button>
            <h4 id="clock-out-text">You are currently clocked out</h4>
          </div>
        </div>
      </>
    );
  }
}

export default ShiftsMenu;
