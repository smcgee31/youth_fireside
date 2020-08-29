import React from 'react';
import flyer from './assets/sep6_fireside_flyer.png';
import './App.css';

function App() {
  const zoomLink = 'https://us02web.zoom.us/j/83720362804?pwd=QnNmekxUK1E1bzJjdnYvbWZlZlVWZz09';
  return (
    <div className="App">
      <div className="wrapper">
        <div className="flyer-container">
          <a href={zoomLink}>
            <img src={flyer} alt="Youth Fireside on Sept 6th at 7:00pm" />{' '}
          </a>
        </div>
        <div className="instructions">
          <p>Click the link above to join the meeting right on this device or join the meeting on your computer using the meeting code below.</p>
          <p>{`Go to zoom.com, then click \n"Join a Meeting"`}</p>
          <div>Meeting ID: 837 2036 2804</div>
          <div>Passcode: 022960</div>
        </div>
      </div>
    </div>
  );
}

export default App;
