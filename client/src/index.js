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
import VideoDisplay from './Components/video-display'
/// End Components

/// Class  
import config from './config'
/// End Class


const API_KEY = config.API_KEY


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: null};
    YTSearch({ key: API_KEY, term: 'Pink Floyd - "Hey You' }, (videos) => {
            this.setState({videos});
            console.log(videos)
    })

  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDisplay video={(this.state.videos ? this.state.videos[0] : null)} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  
}

render(<App />, document.getElementById('App'));