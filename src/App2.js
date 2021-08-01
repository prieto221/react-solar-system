import '../src/App.css';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Container } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App2() {
  const [selected, setSelected] = useState(marsData);
  const [showSettings, setShowSettings] = useState(false);
  const [showNames, setShowNames] = useState(false);

  return (
    <div className='App' style={{ backgroundImage: `${Stars}` }}>
      <div className='container'>
        <div className='empty-container'></div>
        <InfoDisplay selectedPlanet={selected} handleSelected={setSelected} />
        <SolarSystem
          showSettings={showSettings}
          handleShowSettings={setShowSettings}
          showNames={showNames}
          handleShowNames={setShowNames}
        />
      </div>
    </div>
    // <Container
    //   className='d-flex align-items-center justify-content-center'
    //   style={{ minHeight: '100vh' }}
    // >
    //   <div className='w-100' style={{ maxWidth: '400px' }}>
    //     <Router>
    //       <AuthProvider>
    //         <Switch>
    //           <PrivateRoute exact path='/' component={Dashboard} />
    //           <PrivateRoute path='/update-profile' component={UpdateProfile} />
    //           <Route path='/signup' component={Signup} />
    //           <Route path='/login' component={Login} />
    //           <Route path='/forgot-password' component={ForgotPassword} />
    //         </Switch>
    //       </AuthProvider>
    //     </Router>
    //   </div>
    // </Container>
  );
}

export default App2;
