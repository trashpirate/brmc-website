import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <AnchorLink href='#hero' className='navbar-logo' onClick={closeMobileMenu}>
            
            <img
              className='logo-img'
              alt='boredRatsLogo'
              src='/images/ratLogo.png'
            />
            BoredRatMC
          </AnchorLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <AnchorLink href='#about' className='nav-links' onClick={closeMobileMenu}>
                About
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#skins'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skins
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#tokenomics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tokenomics
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <Link
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Whitepaper - coming soon!
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
