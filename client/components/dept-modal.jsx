import React from 'react';

export default class DeptModal extends React.Component {
  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    const buttonStyle = {
      color: 'white',
      backgroundColor: 'red',
      borderRadius: 5,
      width: 100,
      height: 50,
      margin: '0 auto'
    };
    return (
      <div className="backdrop" onClick={this.props.onClose} style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        </div>
        {this.props.children}
        <button className="d-flex justify-content-center align-items-center"style={buttonStyle} onClick={this.props.onClose}>
          <h4 className="align-items-center">CLOSE</h4>
        </button>
      </div>
    );
  }
}
