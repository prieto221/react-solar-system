import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavLinks = () => {
  const location = useLocation();
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
          <Link to='/'>Home</Link>
        </li>
        <li>
          {location.pathname !== '/about' ? (
            <Link to='/about'>About</Link>
          ) : (
            <a style={{ cursor: 'pointer' }}>About</a>
          )}
        </li>
        <li>
          {location.pathname !== '/quiz' ? (
            <Link to='/quiz'>Quiz</Link>
          ) : (
            <a style={{ cursor: 'pointer' }}>Quiz</a>
          )}
        </li>
        <li>
          {!currentUser ? (
            <Link to='/login'>Profile</Link>
          ) : (
            <Link to='/profile'>Profile</Link>
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
