import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavLinks = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // custom hook to get the current pathname in React
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

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
          {usePathname() === '/' ? (
            <a href='#home_link'>Home</a>
          ) : (
            <Link to='/#home_link'>Home</Link>
          )}
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/quiz'>Quiz</Link>
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
