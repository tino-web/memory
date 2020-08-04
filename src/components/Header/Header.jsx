import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import brainIconImg from '@assets/images/logo.png';

function Header() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' exact='true' to='/'>
          <img src={brainIconImg} height='30px' alt='' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbar'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-link' to='/'>
                Game
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-link' to='/customizer'>
                Customize Tiles
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
