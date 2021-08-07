import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className='content-wrap'>
      <div className='planet-container'>
        <h2>{planet.name}</h2>
        <div className='data-and-image-container'>
          <img src={planet.image} alt={planet.name} />
          <div className='data-container'>
            <ul>
              <li>
                Distance from the Sun: <span>{planet.distance}</span>
              </li>
              <li>
                Orbital Period: <span>{planet.orbitTime}</span>
              </li>
              <li>
                Day Length: <span>{planet.dayLength}</span>
              </li>
              <li>
                Mass: <span>{planet.mass}</span>
              </li>
              <li>
                Diameter: <span>{planet.diameter}</span>
              </li>
              <li>
                Gravity at Surface: <span>{planet.gravity}</span>
              </li>
              <li>
                Mean Surface Temp: <span>{planet.temp}</span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>{planet.name}</span> {planet.info}
        </p>
      </div>
    </div>
  );
};

export default Planet;
