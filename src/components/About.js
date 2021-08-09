import React from 'react';
import Footer from './Footer';
import NavLinks from './NavLinks';
import ScrollBar from './ScrollBar';
import { useAuth } from '../contexts/AuthContext';

const About = () => {
  const { currentUser } = useAuth();

  return (
    <div className='info-display-container'>
      <div className='content-wrap'>
        <div className='about-container'>
          <h1>About</h1>
          <p className='about-text'>
            Observe and learn about the planets of the Solar System. If "Day
            Count" is enabled, each planet has a green number next to it
            representing the relative day lengths of each planet. One second is
            equal to 10 Earth days in the animation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
