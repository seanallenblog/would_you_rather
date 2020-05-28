import React from 'react';

const Avatar = (props) => {
  const { url } = props;
  const path = require(`../lib/images/${url}`);

  return (
    <div className='avatar-img-container'>
      <img className='avatar-img' src={path} alt="user's avatar" />
    </div >
  );
};


export default Avatar;