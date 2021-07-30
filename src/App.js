import '../src/App.css';
import React, { useState, useEffect } from 'react';
import SolarSystem from './components/SolarSystem';
import InfoDisplay from './components/InfoDisplay';
import Stars from './images/stars.png';
import TextData, {
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
} from './Textdata';

function App() {
  const [selected, setSelected] = useState(marsData);
  const [showSettings, setShowSettings] = useState(false);
  const [showNames, setShowNames] = useState(false);

  return (
    <div className='App' style={{ backgroundImage: `${Stars}` }}>
      <div className='container'>
        <div className='empty-container'></div>
        <InfoDisplay selectedPlanet={selected} handleSelected={setSelected} />
        <SolarSystem
          showSettings={showSettings}
          handleShowSettings={setShowSettings}
          showNames={showNames}
          handleShowNames={setShowNames}
        />
      </div>
    </div>
  );
}

export default App;
