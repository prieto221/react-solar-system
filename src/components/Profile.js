import React from 'react';
import Footer from './Footer';
import ScrollBar from './ScrollBar';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className='info-display-container'>
      <div className='content-wrap'>
        <div className='profile-container'>
          <h1>Profile</h1>
          <ul>
            <li>
              User email address: {currentUser ? currentUser.email : 'N/A'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
