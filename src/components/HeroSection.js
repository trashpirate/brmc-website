import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './GlobalStyles.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video width="100%" src='/videos/ratTunnel.mov' autoPlay loop muted />
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
              to='https://bscscan.com/'
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              SMART CONTRACT
            </Button>
            <br></br>
            <Button
             to='https://bscscan.com/'
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              PancakeSwap
            </Button>
            <Button
              to='https://bscscan.com/'
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              Poocoin
            </Button>
            <br/>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default HeroSection;
