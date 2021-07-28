import React from 'react';

const NavLinks = () => {
  return (
    <div className='navLinks'>
      <ul>
        <li>
          <a href='#home_link'>Home</a>
        </li>
        <li>
          <a href='#quiz_link'>Quiz</a>
        </li>
        <li>
          <a href='#about_link'>About</a>
        </li>
        <li className='login'>
          <a href='#login_link'>Log In</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
