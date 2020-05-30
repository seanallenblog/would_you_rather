import React from 'react';

const StatsTile = ({ score }) => {

  return (
    <div className='user-score-tile'>
      <h5>Score</h5>
      <hr />
      <p className='score'>{score}</p>
    </div>
  );
};

export default StatsTile;