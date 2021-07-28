import React from 'react';
import Earth from '../images/earth.jpg';
import Mars from '../images/mars.jpg';
import Mercury from '../images/mercury.jpg';
import Venus from '../images/venus.jpg';
import Jupiter from '../images/jupiter.jpg';
import Saturn from '../images/saturn.png';
import Uranus from '../images/uranus.jpg';
import Neptune from '../images/neptune.jpg';
import Sun from '../images/sun.jpg';
import Moon from '../images/moon.jpg';
import {
  earthData,
  jupiterData,
  marsData,
  mercuryData,
  moonData,
  neptuneData,
  saturnData,
  sunData,
  uranusData,
  venusData,
} from '../Textdata';

const SpaceImages = ({ handleSelected }) => {
  return (
    <div className='space-images-container'>
      <img
        onClick={(e) => handleSelected(mercuryData)}
        src={Mercury}
        alt='mercury'
      />
      <img onClick={(e) => handleSelected(venusData)} src={Venus} alt='venus' />
      <img onClick={(e) => handleSelected(earthData)} src={Earth} alt='earth' />
      <img onClick={(e) => handleSelected(marsData)} src={Mars} alt='mars' />
      <img
        onClick={(e) => handleSelected(jupiterData)}
        src={Jupiter}
        alt='jupiter'
      />
      <img
        onClick={(e) => handleSelected(saturnData)}
        src={Saturn}
        alt='saturn'
      />
      <img
        onClick={(e) => handleSelected(uranusData)}
        src={Uranus}
        alt='uranus'
      />
      <img
        onClick={(e) => handleSelected(neptuneData)}
        src={Neptune}
        alt='neptune'
      />
      <img onClick={(e) => handleSelected(sunData)} src={Sun} alt='the sun' />
      <img
        onClick={(e) => handleSelected(moonData)}
        src={Moon}
        alt='the moon'
      />
    </div>
  );
};

export default SpaceImages;
