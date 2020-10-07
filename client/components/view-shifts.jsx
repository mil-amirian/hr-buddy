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
      clockInText.textContent = `You clocked in at ${currentTime.toString().slice(0, 24)}`;
      clockOutText.textContent = 'You are currently clocked in';
    }
    if (clockOutText.textContent.includes('at')) {
      clockOutText.textContent = 'You are currently clocked in';
      clockInText.textContent = `You clocked in at ${currentTime.toString().slice(0, 24)}`;
    }
  }

  handleClockOut(event) {
    const clockOutText = document.getElementById('clock-out-text');
    const currentTime = new Date();
    if (clockOutText.textContent === 'You are currently clocked in') {
      clockOutText.textContent = `You clocked out at ${currentTime.toString().slice(0, 24)}`;
    }

  }

  render() {
    return (
      <>
        <div className="spacer"></div>
        <div className="container d-flex justify-content-center align-items-center flex-column p-2 mt-4">
          <div className="">
            <button type="button" className="btn btn-success mt-4 clock-in-button" onClick={this.handleClockIn}>Clock In</button>
          </div>
          <div className="clock-in-container row d-flex flex-column p-2">
            <h4 id="clock-in-text">You are currently not clocked in</h4>
          </div>
          <div className="">
            <button type="button" className="btn btn-danger mt-4 clock-out-button" onClick={this.handleClockOut}>Clock Out</button>
          </div>
          <div className="clock-out-container row d-flex flex-column p-2">
            <h4 id="clock-out-text">You are currently clocked out</h4>
          </div>
        </div>
      </>
    );
  }
}

export default ShiftsMenu;
