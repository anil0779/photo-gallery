import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar/index';
import PhotoList from './components/photo-list/index';
import { getPhotos } from './services/utils';

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((resp)=> {
      setPhotos(resp);
    })
  })



  return (
    <div className="App">
      <header className="App-header">
        Photo Gallery
      </header>
      <SearchBar />
      <PhotoList photos={photos}/>
    </div>
  );
}

export default App;
