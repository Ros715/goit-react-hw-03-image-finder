import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div>
        <button type="button" className="Button" onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
