import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLinks = () => {
  return (
    <div className='mobile-nav-links'>
      <div className='close-mobile-nav-links'>
        <Link to='/'>X</Link>
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Quiz</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
