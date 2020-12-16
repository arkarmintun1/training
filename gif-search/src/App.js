import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';
import axios from 'axios';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('cats');

  useEffect(() => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then((response) => setGifs(response.data.data))
      .catch((error) => console.log('Error fetching and parsing data', error))
      .finally(() => setLoading(false));
  }, [query]);

  const performSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {loading ? <p>Loading...</p> : <GifList data={gifs} />}
      </div>
    </>
  );
};

export default App;
