import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {

  //declare state
  const [data, setData] = useState([])
  const [query, setQuery] = useState('dogs')

  const updateQuery = (input) => setQuery(input) 

  //useEffect hook
  useEffect(() => {
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=4hYEwOGpHRpjIiCrGrQJQOrk5t23IxWj`)
    .then(response => setData(response.data.data))
    .catch(error => console.log('There has been an error fetching this data', error))
  }, [query])

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={updateQuery}/>
        </div>
      </div>
      <div className="main-content">
        <GifList data={data}/>
      </div>
    </>
  );
}

export default App

