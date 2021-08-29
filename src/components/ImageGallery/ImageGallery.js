import React from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";
//import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.js";

class ImageGallery extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return <ul className="ImageGallery">{this.props.children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ImageGallery;
