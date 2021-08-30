import React from "react";
import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";
import apiService from "./components/apiService/apiService.js";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

class App extends React.Component {
  state = {
    loadInProggress: false,
    enableLoadMore: false,
    enableModal: false,
    photosList: [],
    query: "",
    page: 1,
    perPage: 12,
    largeURL: "",
  };

  /*constructor(props) {
    super(props);
  }*/

  formatQuery = (text) => {
    return text.trim().split(" ").join("+");
  };

  loadPhotos = (query, page) => {
    //console.log("query=", query, "page=", page);
    this.setState({ loadInProggress: true });
    apiService(query, page, this.state.perPage).then((apiOutput) => {
      this.setState({
        query: query,
        page: page,
        enableLoadMore: apiOutput.hits.length === this.state.perPage,
        loadInProggress: false,
        photosList: this.state.photosList.concat(apiOutput.hits),
      });

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  onNewRequest = (query) => {
    this.setState({
      photosList: [],
    });
    this.loadPhotos(query, 1);
  };

  onLoadMore = () => {
    this.loadPhotos(this.state.query, this.state.page + 1);
  };

  closeModal = () => {
    this.setState({ enableModal: false });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onNewRequest} />
        <ImageGallery photosList={this.state.photosList}>
          {this.state.photosList.map((photo) => {
            return (
              <ImageGalleryItem
                photo={photo}
                key={photo.id}
                onClick={(url) => {
                  this.setState({ enableModal: true, largeURL: url });
                }}
              />
            );
          })}
        </ImageGallery>
        {this.state.loadInProggress && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.enableLoadMore && <Button onClick={this.onLoadMore} />}
        {this.state.enableModal && (
          <Modal url={this.state.largeURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
