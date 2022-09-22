import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <h1 className='footer-title'>FOLLOW US</h1>
      <div class='social-icons'>
            <Link
              class='social-icon-link telegram'
              to='/'
              target='https://t.me/boredratmazeclub'
              aria-label='Telegram'
            >
              <i class='fab fa-telegram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='https://twitter.com/BoredRatMC'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          
            <Link to='/' className='footer-logo'>
            <img
              className='logo-img'
              alt='boredRatsLogo'
              src='/images/ratLogo.png'
            />
              BoredRAT
            </Link>
          </div>
          <small class='website-rights'>BoredRAT © 2022</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
