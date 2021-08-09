import React from 'react';
import About from './About';
import Footer from './Footer';
import NavLinks from './NavLinks';
import Quiz from './Quiz';
import ScrollBar from './ScrollBar';
import { useAuth, AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Profile from './Profile';
import InfoDisplay from './InfoDisplay';

const RightSide = ({ selectedPlanet, handleSelected, location }) => {
  const { currentUser } = useAuth();

  return (
    <div className='right-side'>
      {currentUser && <ScrollBar />}
      <NavLinks location={location} />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={600} classNames='item'>
              <Switch location={location}>
                <Profile path='/profile' />
                <Quiz path='/quiz' />
                <About path='/about' />
                <InfoDisplay
                  path='/'
                  selectedPlanet={selectedPlanet}
                  handleSelected={handleSelected}
                  unmountonexit={true}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};

export default RightSide;
