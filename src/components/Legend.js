import React from 'react';

const Legend = ({ showLegend, handleShowLegend }) => {
  return (
    <div
      className={
        showLegend ? 'legend-container' : 'legend-container hideLegend'
      }
    >
      <button
        onClick={(e) => handleShowLegend(!showLegend)}
        className='close-btn'
      >
        X
      </button>
      <ul>
        <li>Body and orbit sizes are not to scale</li>
        <li>
          Relative speeds of the planets are to scale, and they revolve around
          the Sun 864,000 times faster than in real life (1 second in the
          animation = 10 days in real life)
        </li>
        <li>Actual orbits are not perfect spheres</li>
        <li>
          Day counter represents the speed at which a planet makes a complete
          revolution on its axis (a day)
        </li>
      </ul>
      <h4>Legend</h4>
    </div>
  );
};

export default Legend;
