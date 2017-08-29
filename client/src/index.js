// React 
import React, { Component } from 'react';
import { render } from 'react-dom';
// End React 

/// NPM 
import YTSearch from 'youtube-api-search'
/// End NPM 

/// Components 
import Searchbar from './Components/searchbar'
import VideoList from './Components/video-list'
/// End Components

/// Class  
import config from './config'
/// End Class


const API_KEY = config.API_KEY


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'Egypt' }, (videos) => {
            this.setState({ videos });
    })

  }


  render() {
    return (
      <div>
        <Searchbar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  
}

render(<App />, document.getElementById('App'));