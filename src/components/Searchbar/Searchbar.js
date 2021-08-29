import React from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.name);
    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.onSubmit}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={(e) => {
              //console.log("name", e.currentTarget.value);
              this.setState({ name: e.currentTarget.value });
            }}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
