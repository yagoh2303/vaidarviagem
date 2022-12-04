import React from 'react';
import "./App.scss";

import Navigation from './components/Navbar';
import Slider from './components/Carousel';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Slider />
      <Search />
    </div>
  );
}

export default App;
