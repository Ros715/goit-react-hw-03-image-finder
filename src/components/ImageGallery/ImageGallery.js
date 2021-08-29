import React from "react";
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

export default ImageGallery;
