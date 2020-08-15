import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar/index';
import PhotoList from './components/photo-list/index';
import { getPhotos } from './services/utils';

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((resp) => {
      setPhotos(resp);
    })
  }, []) // component did mount equivalent

  const fetchSearchResult = (keyword) => {
    getPhotos(keyword).then((resp) => {
      resp.results && resp.results.length === 0 ?
        alert('No search Results found. Go to Home Page?')
        :
        setPhotos(resp.results);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Photo Gallery
      </header>
      <SearchBar onSearch={fetchSearchResult} />
      <PhotoList photos={photos} />
    </div>
  );
}

export default App;
