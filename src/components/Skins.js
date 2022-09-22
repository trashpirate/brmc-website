import React from 'react';
import './Skins.css';
import Cards from './Cards';

function Skins() {
  return (
    <div className='skins' id='skins'>
      <div className='skins_title'>
        <h1>CHOOSE YOUR POWER</h1>
      </div>
      <Cards/>
    </div>
  );
}

export default Skins;
