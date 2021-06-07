import React from 'react';
import Modal from '@material-ui/core/Modal';

export default class DeptModal extends React.Component {
  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

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

    const body = (
      <div>
        <div className="modal" style={modalStyle}>
        </div>
        {this.props.children}
        <button className="d-flex justify-content-center align-items-center" style={buttonStyle} onClick={this.props.onClose}>
          <h4 className="align-items-center">CLOSE</h4>
        </button>
      </div>
    );
    return (
      <div>
        <Modal open={open}>
          {body}
        </Modal>
      </div>
    );
  }
}
