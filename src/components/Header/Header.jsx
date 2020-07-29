import React from 'react';

function Header() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='link'>Memory</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls='navbarsExample07XL' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbar'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='link'>Game</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='link'>Scores</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='link'>Customize Tiles</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
