import React from "react";
import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.query = "";
    this.page = 1;
    this.perPage = 12;
    this.largeURL = "";
    this.state = {
      //query: "",
      //page: 1,
      //perPage: 12,
      loadInProggress: false,
      enableLoadMore: false,
      enableModal: false,
      photosList: [],
    };
    document.addEventListener("keydown", (e) => {
      //console.log("code", e.code, "key", e.key, "keyCode", e.keyCode);
      if (e.key === "Escape") {
        //this.setState({ enableModal: false });
        //this.state.enableModal = false;
        this.closeModal();
      }
    });
  }

  formatQuery = (text) => {
    return text.trim().split(" ").join("+");
  };

  apiService = (searchQuery, page, perPage) => {
    const myKey = "22353815-5fa21056c210e4ef7062efe69";
    //console.log("page", page, searchQuery);
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${myKey}`
    ).then((response) => response.json());
  };

  loadPhotos = () => {
    this.setState({ loadInProggress: true });
    this.apiService(this.query, this.page, this.perPage).then((apiOutput) => {
      //console.log(apiOutput.hits);
      this.setState({
        photosList: this.state.photosList.concat(
          apiOutput.hits.map((photo) => {
            return {
              id: photo.id,
              webformatURL: photo.webformatURL,
              largeImageURL: photo.largeImageURL,
            };
          })
        ),
      });
      this.setState({ loadInProggress: false });
      //console.log(this.state.photosList.length);
      if (apiOutput.hits.length === this.perPage) {
        this.page += 1;
        this.setState({ enableLoadMore: true });
      } else {
        this.setState({ enableLoadMore: false });
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  onNewRequest = (query) => {
    //console.log(query);

    this.query = this.formatQuery(query);
    this.page = 1;
    this.setState({
      //query: this.formatQuery(query),
      //page: 1,
      photosList: [],
    });

    this.loadPhotos();
  };

  onLoadMore = () => {
    //console.log("Load more");
    this.loadPhotos();
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
                  //console.log(url);
                  this.largeURL = url;
                  this.setState({ enableModal: true });
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
          <Modal url={this.largeURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
