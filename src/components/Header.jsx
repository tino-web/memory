import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import brainIconImg from '../assets/images/logo.png';

function Header() {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='container'>
        <Link
          className='navbar-brand'
          exact='true'
          to='/'
        >
          <img
            src={brainIconImg}
            height='30px'
            alt=''
          />
        </Link>

        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink
              activeClassName='active'
              className='nav-link'
              exact
              to='/'
            >
              Game
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeClassName='active'
              className='nav-link'
              to='/customizer'
            >
              Customize Tiles
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
