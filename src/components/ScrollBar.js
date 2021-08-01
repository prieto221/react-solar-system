import React, { useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';

const ScrollBar = () => {
  const { currentUser } = useAuth();

  return (
    <div className='scroll-bar'>
      {currentUser ? <p>Signed in as {currentUser.email}</p> : ''}
    </div>
  );
};

export default ScrollBar;
