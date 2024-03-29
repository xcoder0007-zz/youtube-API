// React 
import React, { Component } from 'react';
import { render } from 'react-dom';
// End React 

/// NPM 
import YTSearch from 'youtube-api-search'
/// End NPM 

/// Components 
import Header from './Components/header'
import Searchbar from './Components/searchbar'
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
    this.state = {
      videos: null,
      Selected: null
    };


    this.Search('Pink Floyd - Hey You'); // default search term

  }


  Search(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        Selected: videos[0]

      });
    })
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <Header />
          <Searchbar getSearchterm={term => this.Search(term)} />
          <VideoDisplay video={(this.state.Selected ? this.state.Selected : null)} />
          <VideoList OnvideoSelect={Selected => this.setState({ Selected })} videos={this.state.videos} />
        </div>
      </div>
    );
  }

}

render(<App />, document.getElementById('App'));