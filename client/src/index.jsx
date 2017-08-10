import React from 'react';
import {render} from 'react-dom';
import Config from 'config'
const API_KEY =  Config.API_KEY

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('App'));