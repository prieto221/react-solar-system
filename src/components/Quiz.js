import React from 'react';
import Footer from './Footer';
import NavLinks from './NavLinks';
import ScrollBar from './ScrollBar';
import { useAuth } from '../contexts/AuthContext';

const Quiz = () => {
  const { currentUser } = useAuth();

  return (
    <a id='home_link'>
      <div className='info-display-container'>
        {currentUser && <ScrollBar />}
        <NavLinks />
        <div className='content-wrap'>
          <div className='quiz-container'>
            <h1>Quiz</h1>
            <h4>Coming Soon</h4>
          </div>
        </div>
        <Footer />
      </div>
    </a>
  );
};

export default Quiz;
