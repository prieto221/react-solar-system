import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavLinks = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logout();
      history.push('/');
    } catch {
      setError('Failed to sign out');
    }
    setLoading(false);
  }

  return (
    <div className='navLinks'>
      <ul>
        <li>
          <a href='#home_link'>Home</a>
        </li>
        <li>
          <a href='#about_link'>About</a>
        </li>
        <li>
          <Link to='/quiz' onClick={(e) => alert('Quiz not implemented yet!')}>
            Quiz
          </Link>
        </li>
        <li>
          {!currentUser ? (
            <Link
              to='/login'
              onClick={(e) => alert('Profile not implemented yet!')}
            >
              Profile
            </Link>
          ) : (
            <Link
              to='/profile'
              onClick={(e) => alert('Profile not implemented yet!')}
            >
              Profile
            </Link>
          )}
        </li>
        <li className='login'>
          {!currentUser ? (
            <Link to='/login'>Log In</Link>
          ) : (
            <Link to='/' onClick={(e) => handleSubmit(e)}>
              Log Out
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
