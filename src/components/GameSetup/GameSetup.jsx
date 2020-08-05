import React, { useContext, useState } from 'react';
import { Context } from '@context/gameContext';
import BootStrapSwitchButton from 'bootstrap-switch-button-react';
import logoImg from '@assets/images/logo.png';
import card1Img from '@assets/images/tile-bg/setup_1.png';
import card2Img from '@assets/images/tile-bg/setup_2.png';
import card3Img from '@assets/images/tile-bg/setup_3.png';

function GameSetup() {
  const {
    setGameStarted,
    updatePlayer,
    setTileBg,
    setPlayerNumber,
  } = useContext(Context);

  const [playerToggle, setPlayerToggle] = useState(false);
  const [p1field, setP1field] = useState('');
  const [p2field, setP2field] = useState('');
  const [cardBg, setCardBg] = useState('card1');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer('name', p1field, 1);
    if (playerToggle) {
      setPlayerNumber(1);
    } else {
      updatePlayer('name', p2field, 2);
      setPlayerNumber(2);
    }
    setTileBg(cardBg);
    setGameStarted(true);
  };

  const inputField = (playerNumber, playerName, handleChange, hideRow) => (
    <div
      className={`row justify-content-center bg-light border border-bottom-0 border-top-0 showRow ${hideRow ? 'hideRow' : ''}`} 
      style={{ height: '50px' }}
    >
      <div className='col-3 my-auto text-right'>
        {`Player ${playerNumber}:`}
      </div>
      <div className='col-6 my-auto'>
        <input
          type='text'
          value={playerName}
          className='form-control'
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Enter name'
          required={!hideRow}
        />
      </div>
    </div>
  );

  const radioInput = (cardBgName, cardBgImg) => (
    <div className='col-4 my-auto'>
      <label htmlFor={cardBgName}>
        <img src={cardBgImg} alt='' className='w-100' />
        <input
          type='radio'
          id={cardBgName}
          name='cardBg'
          value={cardBg === cardBgName}
          onChange={(e) => setCardBg(e.target.id)}
        />
      </label>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-center'>
          <div className='col pt-4' style={{ maxWidth: '400px' }}>
            <div className='row pb-3'>
              <img src={logoImg} className='mx-auto d-block' style={{ width: '400px', height: '93px'}} alt='Memory' />
            </div>

            <div
              className='row justify-content-center bg-light border rounded-top border-bottom-0 pt-3'
              style={{ height: '70px' }}
            >
              <div className='col-5 my-auto text-right'>
                1 Player
              </div>
              <div className='col-2 p-0 my-auto text-center'>
                <BootStrapSwitchButton
                  onChange={(e) => setPlayerToggle(e)}
                  checked={playerToggle}
                  onlabel='1P'
                  offlabel='2P'
                  // eslint-disable-next-line react/style-prop-object
                  style='switch'
                  onstyle='light'
                  offstyle='light'
                />
              </div>
              <div className='col-5 my-auto'>
                2 Player
              </div>
            </div>

            {inputField(1, p1field, setP1field)}
            {inputField(2, p2field, setP2field, playerToggle)}

            <div
              className='row justify-content-center bg-light border border-bottom-0 border-top-0 text-center'
              style={{ height: '180px' }}
            >
              {radioInput('card1', card1Img)}
              {radioInput('card2', card2Img)}
              {radioInput('card3', card3Img)}
            </div>

            <div
              className='row justify-content-center bg-light border rounded-bottom border-top-0 pb-4'
              style={{ height: '50px' }}
            >
              <div className='col-5 my-auto text-center'>
                <input type='submit' className='btn orange border' value='Start Game' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default GameSetup;
