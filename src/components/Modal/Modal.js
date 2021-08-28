import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
