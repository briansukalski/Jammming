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
        id: 5
      }, {
        name: 'Trees',
        artist: 'Twenty One Pilots',
        album: 'Vessel',
        id: 6
      }, {
        name: 'Maybe IDK',
        artist: 'Jon Bellion',
        album: 'The Human Condition',
        id: 7
      }, {
        name: 'Everlong',
        artist: 'Foo Fighters',
        album: 'The Colour and the Shape',
        id: 8
      }],
      playlistName: "My Faves",
      playlistTracks: [{
        name: 'The Way I Tend To Be',
        artist: 'Frank Turner',
        album: 'Tape Deck Heart',
        id: 1
      }, {
        name: 'Legend',
        artist: 'Twenty One Pilots',
        album: 'Trench',
        id: 2
      }, {
        name: 'Luxury',
        artist: 'Jon Bellion',
        album: 'The Definition',
        id: 3
      }, {
        name: 'These Days',
        artist: 'Foo Fighters',
        album: 'Wasting Light',
        id: 4
      }]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
              <SearchBar/>
          <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>  
      </div>
    );
  }

  addTrack(track) {
    let isNew = true;
    for (let playlistTrack of this.state.playlistTracks) {
      if (track.id === playlistTrack.id) {
        isNew = false;
        break;
      }
    }
    if (isNew) {
      this.setState({playlistTracks: this.state.playlistTracks.concat([track])});
    }
  }

} 

export default App;
