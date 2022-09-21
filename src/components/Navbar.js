import React, { useState } from 'react';
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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <img
              className='logo-img'
              alt='boredRatsLogo'
              src='/images/ratLogo.png'
            />
            BoredRAT
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skins'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skins
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tokenomics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tokenomics
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Whitepaper
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='https://github.com/ContractChecker/SAFU'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Audits
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
