import React from 'react';
import './Footer.css';
import { Button } from '../helpers/Button';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Footer() {
  return (
    <div className='footer-container'>
      
      <h1 className='footer-title'>FOLLOW US</h1>
      <div class='social-icons'>
            <a
              class='social-icon-link telegram'
              href='https://t.me/boredratmazeclub'
              aria-label='Telegram'
            >
              <i class='fab fa-telegram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/BoredRatMC'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          
            <AnchorLink href='#hero' className='footer-logo'>
            <img
              className='logo-img'
              alt='boredRatsLogo'
              src='/images/ratLogo.png'
            />
              BoredRatMazeClub
            </AnchorLink>
          </div>
          <small class='website-rights'>BoredRatMazeClub © 2022</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
