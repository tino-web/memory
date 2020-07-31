import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';

const logoImg = require('../../assets/images/logo.png');

function GameSetup() {
  const { setGameStarted } = useContext(Context);
  const handleClick = () => {
    setGameStarted(true);
  };

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col pt-4' style={{ flex: '0 0 400px' }}>
          <div className='row pb-3'>
            <img src={logoImg.default} style={{ maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} alt='Memory' />
          </div>
          <div className='row justify-content-center bg-secondary' style={{ height: '50px' }}>
            <div className='col-5 my-auto' style={{ textAlign: 'right' }}>
              1 Player
            </div>
            <div className='col-2 p-0 my-auto' style={{ textAlign: 'center'}}>
              <input type='checkbox' data-on='1P' data-off='2P' data-toggle='toggle' data-style='switch' data-onstyle='light' data-offstyle='light' />
            </div>
            <div className='col-5 my-auto'>
              2 Player
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-5 my-auto'>
              <button type='button' className='btn bg-warning' onClick={handleClick}>Start Game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameSetup;

// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >
// https://gitbrent.github.io/bootstrap4-toggle/