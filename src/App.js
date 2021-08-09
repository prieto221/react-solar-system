import '../src/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import SolarSystem from './components/SolarSystem';
import InfoDisplay from './components/InfoDisplay';
import Stars from './images/stars.png';
import TextData, {
  mercuryData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
} from './Textdata';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import MobileNavLinks from './components/MobileNavLinks';
import HamburgerMenu from './components/HamburgerMenu';
import RightSide from './components/RightSide';

function App() {
  const [selected, setSelected] = useState(marsData);
  const [showSettings, setShowSettings] = useState(false);
  const [showNames, setShowNames] = useState(false);

  return (
    <>
      {/* <div className='App' style={{ backgroundImage: `${Stars}` }}></div> */}
      <BrowserRouter>
        <AuthProvider>
          <Route path='/'>
            <div className='container2'>
              <div className='empty-container'></div>
              <RightSide
                selectedPlanet={selected}
                handleSelected={setSelected}
              />
              <SolarSystem
                showSettings={showSettings}
                handleShowSettings={setShowSettings}
                showNames={showNames}
                handleShowNames={setShowNames}
              />
            </div>
          </Route>

          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/mobile-nav-links' exact component={MobileNavLinks} />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
