import React from "react";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          src={this.props.photo.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
