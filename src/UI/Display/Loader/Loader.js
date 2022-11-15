import React from 'react';

import './Loader.modules.css';

const Loader = () => {
  return (
    <div className='flex content-center justify-center items-center'>
    <div className='lds-roller'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div></div>
  );
};

export default Loader;