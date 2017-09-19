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
    YTSearch({ key: API_KEY, term: 'Pink Floyd - "Hey You' }, (videos) => {
      this.setState({
        videos: videos,
        Selected: videos[0]

      });
    })

  }




  render() {
    return (
      <div>
        <Searchbar />
        <VideoDisplay video={(this.state.Selected ? this.state.Selected : null)} />
        <VideoList
         OnvideoSelect={Selected => this.setState({Selected})}
         videos={this.state.videos} />
      </div>
    );
  }

}

render(<App />, document.getElementById('App'));