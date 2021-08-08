import React from 'react';
import Footer from './Footer';
import NavLinks from './NavLinks';
import ScrollBar from './ScrollBar';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <a id='home_link'>
      <div className='info-display-container'>
        {currentUser && <ScrollBar />}
        <NavLinks />
        <div className='content-wrap'>
          <div className='profile-container'>
            <h1>Profile</h1>
            <ul>
              <li>User email address: {currentUser.email}</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </a>
  );
};

export default Profile;
