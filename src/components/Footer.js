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
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
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
              BoredRATs
            </Link>
          </div>
          <small class='website-rights'>BoredRATs © 2022</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
