import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

class Modal extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
