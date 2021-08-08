import React from 'react';
import Footer from './Footer';
import NavLinks from './NavLinks';
import ScrollBar from './ScrollBar';
import { useAuth } from '../contexts/AuthContext';

const Quiz = () => {
  const { currentUser } = useAuth();

  return (
    <div className='info-display-container'>
      <div className='content-wrap'>
        <div className='quiz-container'>
          <h1>Quiz</h1>
          <h4>Coming Soon</h4>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
