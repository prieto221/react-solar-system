import React, { useState, useEffect } from 'react';
import Cog from '../icons/cog-white.png';
import Legend from './Legend';

const SolarSystem = ({
  showNames,
  handleShowNames,
  showSettings,
  handleShowSettings,
}) => {
  const [showLegend, setShowLegend] = useState(false);
  const [showDays, setShowDays] = useState(false);
  const [mercuryDay, setMercuryDay] = useState(0);
  const [venusDay, setVenusDay] = useState(0);
  const [earthDay, setEarthDay] = useState(0);
  const [marsDay, setMarsDay] = useState(0);
  const [jupiterDay, setJupiterDay] = useState(0);
  const [saturnDay, setSaturnDay] = useState(0);
  const [uranusDay, setUranusDay] = useState(0);
  const [neptuneDay, setNeptuneDay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMercuryDay((mercuryDay) => mercuryDay + 1);
    }, 5906);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVenusDay((venusDay) => venusDay + 1);
    }, 11694);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEarthDay((earthDay) => earthDay + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarsDay((marsDay) => marsDay + 1);
    }, 102.571);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setJupiterDay((jupiterDay) => jupiterDay + 1);
    }, 41.67);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSaturnDay((saturnDay) => saturnDay + 1);
    }, 44.8);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUranusDay((uranusDay) => uranusDay + 1);
    }, 67.5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeptuneDay((neptuneDay) => neptuneDay + 1);
    }, 72.1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      /* ref={SolarSystemContainerEle}  */ className={`solar-system-container ${
        showNames ? 'hide-names' : ''
      } ${showDays ? 'hide-days' : ''}`}
    >
      <img
        onClick={(e) => handleShowSettings(!showSettings)}
        className='cog'
        src={Cog}
        alt='settings-cog'
      />
      <div
        className={
          showSettings
            ? 'settings-container'
            : 'settings-container hideSettings'
        }
      >
        <div className='settings'>
          <button
            className={showNames ? '' : 'pressed'}
            onClick={(e) => handleShowNames(!showNames)}
            style={{ cursor: 'pointer' }}
          >
            Planet Names
          </button>
          <button
            className={showDays ? '' : 'pressed'}
            onClick={(e) => setShowDays(!showDays)}
            style={{ cursor: 'pointer' }}
          >
            Day Count
          </button>
          <button
            className={showLegend ? 'pressed' : ''}
            onClick={(e) => setShowLegend(!showLegend)}
            style={{ cursor: 'pointer' }}
          >
            Toggle Legend
          </button>
        </div>
      </div>
      {showLegend && <Legend />}
      <div className='solar-system'>
        {/* Orbit Hierarchy */}
        <div className='orbit neptune'>
          <div className='planet-neptune'>
            <div className='span-container'>
              <span className='planet-span-name'>Neptune</span>
              <span className='planet-span-day'>Day {neptuneDay}</span>
            </div>
          </div>
          <div className='orbit uranus'>
            <div className='planet-uranus'>
              <div className='span-container'>
                <span className='planet-span-name'>Uranus</span>
                <span className='planet-span-day'>Day {uranusDay}</span>
              </div>
            </div>
            <div className='orbit saturn'>
              <div className='planet-saturn'>
                <div className='span-container'>
                  <span className='planet-span-name'>Saturn</span>
                  <span className='planet-span-day'>Day {saturnDay}</span>
                </div>
              </div>
              <div className='orbit jupiter'>
                <div className='planet-jupiter'>
                  <div className='span-container'>
                    <span className='planet-span-name'>Jupiter</span>
                    <span className='planet-span-day'>Day {jupiterDay}</span>
                  </div>
                </div>
                <div className='orbit mars'>
                  <div className='planet-mars'>
                    <div className='span-container'>
                      <span className='planet-span-name'>Mars</span>
                      <span className='planet-span-day'>Day {marsDay}</span>
                    </div>
                  </div>
                  <div className='orbit earth'>
                    <div className='planet-earth'>
                      <div className='span-container'>
                        <span className='planet-span-name'>Earth</span>
                        <span className='planet-span-day'>Day {earthDay}</span>
                      </div>
                    </div>
                    <div className='orbit venus'>
                      <div className='planet-venus'>
                        <div className='span-container'>
                          <span className='planet-span-name'>Venus</span>
                          <span className='planet-span-day'>
                            Day {venusDay}
                          </span>
                        </div>
                      </div>
                      <div className='orbit mercury'>
                        <div className='planet-mercury'>
                          <div className='span-container'>
                            <span className='planet-span-name'>Mercury</span>
                            <span className='planet-span-day'>
                              Day {mercuryDay}
                            </span>
                          </div>
                        </div>
                        <div className='sun'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
