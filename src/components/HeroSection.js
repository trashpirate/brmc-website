import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ratTunnel.mov' autoPlay loop muted />
      <div className='row'>
        <div className='column'>
          <img
            className='hero-img'
            alt='boredRatsLogo'
            src='/images/boredRat_250px.png'
          />
        </div>
        <div className='column'>
          <div className='hero-btns'>
            <h1>Welcome To BoredRAT</h1>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <br></br>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default HeroSection;
