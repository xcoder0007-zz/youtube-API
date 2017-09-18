// React 
import React, { Component } from 'react';
import { render } from 'react-dom';
// End React 

/// NPM 
import YTSearch from 'youtube-api-search'
/// End NPM 

/// Components 
import SearchBar from './Components/searchbar'
import VideoList from './Components/video-list'
/// End Components

/// Class  
import config from './config'
/// End Class


const API_KEY = config.API_KEY


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: null };
    YTSearch({ key: API_KEY, term: 'Hey you pink' }, (videos) => {
            this.setState({ videos });
    })

  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  
}

render(<App />, document.getElementById('App'));