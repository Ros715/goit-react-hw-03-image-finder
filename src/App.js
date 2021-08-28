import React from "react";
import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem.js";
import Button from "./components/Button/Button.js";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      page: 1,
      perPage: 12,
      loadInProggress: false,
      photosList: [],
    };
  }

  formatQuery = (text) => {
    return "forest"; //text.trim().split(" ").join("+");
  };

  apiService = (searchQuery, page, perPage) => {
    const myKey = "22353815-5fa21056c210e4ef7062efe69";
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${myKey}`
    ).then((response) => response.json());
  };

  loadPhotos = () => {
    this.setState({ loadInProggress: true });
    this.apiService(this.state.query, this.state.page, this.state.perPage).then(
      (apiOutput) => {
        //console.log(apiOutput.hits);
        this.setState({ loadInProggress: false });
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
        //console.log(this.state.photosList.length);
      }
    );
  };

  onNewRequest = (query) => {
    console.log(query);
    this.setState({
      query: this.formatQuery(query),
      page: 1,
      photosList: [],
    });
    this.loadPhotos();
  };

  onLoadMore = () => {
    console.log("Load more");
    this.loadPhotos();
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onNewRequest} />
        <ImageGallery photosList={this.state.photosList}>
          {this.state.photosList.map((photo) => {
            return <ImageGalleryItem photo={photo} key={photo.id} />;
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
        <Button onClick={this.onLoadMore} />
      </div>
    );
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
