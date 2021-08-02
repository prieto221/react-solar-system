import React from 'react';
import About from './About';
import Footer from './Footer';
import NavLinks from './NavLinks';
import Planet from './Planet';
import Quiz from './Quiz';
import ScrollBar from './ScrollBar';
import SpaceImages from './SpaceImages';
import { useAuth } from '../contexts/AuthContext';

const InfoDisplay = ({ selectedPlanet, handleSelected }) => {
  const { currentUser } = useAuth();

  return (
    <a id='home_link'>
      <div className='info-display-container'>
        {currentUser && <ScrollBar />}
        <NavLinks />
        <h1>Solar System Viewer</h1>
        <SpaceImages handleSelected={handleSelected} />
        <Planet planet={selectedPlanet} />
        {/* <Quiz /> */}
        <About />
        <Footer />
      </div>
    </a>
  );
};

export default InfoDisplay;
