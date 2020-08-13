import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/index';
import PhotoList from './components/photo-list/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Photo Gallery
      </header>
      <SearchBar />
      <PhotoList />
    </div>
  );
}

export default App;
