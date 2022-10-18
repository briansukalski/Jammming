// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Photosynthesis',
        artist: 'Frank Turner',
        album: 'Love Ire and Song',
        id: 1
      }, {
        name: 'Trees',
        artist: 'Twenty One Pilots',
        album: 'Vessel',
        id: 2
      }, {
        name: 'Maybe IDK',
        artist: 'Jon Bellion',
        album: 'The Human Condition',
        id: 3
      }, {
        name: 'Everlong',
        artist: 'Foo Fighters',
        album: 'The Colour and the Shape',
        id: 4
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
              <SearchBar/>
          <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults}/>
              <Playlist/>
          </div>
        </div>  
      </div>
    );
  }
} 

export default App;
