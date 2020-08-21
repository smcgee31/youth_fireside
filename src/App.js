import React from 'react';
import flyer from './assets/aug_23_fireside_flyer.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flyer-container">
        <img src={flyer} alt="Fireside on Aug 23rd at 7:00pm" />{' '}
      </div>
    </div>
  );
}

export default App;
