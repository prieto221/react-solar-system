import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <Link to='/mobile-nav-links'>
      <div className='hamburger-container'>
        <div className='line line-1'></div>
        <div className='line line-2'></div>
        <div className='line line-3'></div>
      </div>
    </Link>
  );
};

export default HamburgerMenu;
