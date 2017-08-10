import React from 'react';
import { render } from 'react-dom';
import Searchbar from './Components/Search_bar.jsx'
import Config from './config'
const API_KEY = Config.API_KEY

const App = () => {
  return(
  <div>
    <Searchbar />
  </div>
  )
}

render(<App />, document.getElementById('App'));