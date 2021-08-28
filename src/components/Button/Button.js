import React from "react";
import "./Button.css";

class Button extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <button type="button" className="Button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
