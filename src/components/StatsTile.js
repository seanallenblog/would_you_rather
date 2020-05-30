import React from 'react';

const StatsTile = ({ numAsked, numAnswered }) => {

  return (
    <div className="user-stats-tile">
      <div>
        <p>Questions asked: {numAsked}</p>
      </div>
      <hr />
      <div>
        <p>Questions answered: {numAnswered}</p>
      </div>
    </div>
  );
};

export default StatsTile;