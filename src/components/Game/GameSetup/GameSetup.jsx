import React, { useContext, useState, useRef } from 'react';

import { GameContext } from '../../../context/gameContext';
import logoImg from '../../../assets/images/logo.png';
import GameSetupName from './GameSetupName';
import GameSetupSwitch from './GameSetupSwitch';
import GameSetupRadio from './GameSetupRadio';

function GameSetup() {
  const {
    setGameStarted,
    setTileBg,
    setPlayerNumber,
    updatePlayer,
  } = useContext(GameContext);

  const inputRefP1 = useRef(null);
  const inputRefP2 = useRef(null);
  const [playerToggle, setPlayerToggle] = useState(false);
  const [cardBg, setCardBg] = useState('card1');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer('name', inputRefP1.current.value, 1);
    updatePlayer('name', inputRefP2.current.value, 2);
    setPlayerNumber(playerToggle ? 1 : 2);
    setTileBg(cardBg);
    setGameStarted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-center'>
          <div
            className='col pt-4'
            style={{ maxWidth: '400px' }}
          >
            <div className='row pb-3'>
              <img
                src={logoImg}
                className='mx-auto d-block'
                style={{ width: '400px', height: '93px' }}
                alt='Memory'
              />
            </div>

            <GameSetupSwitch playerToggle={playerToggle} setPlayerToggle={setPlayerToggle} />
            <GameSetupName playerNumber='1' hideRow={false} inputRef={inputRefP1} />
            <GameSetupName playerNumber='2' hideRow={playerToggle} inputRef={inputRefP2} />

            <div
              className='row justify-content-center bg-light border border-bottom-0 border-top-0 text-center'
              style={{ height: '180px' }}
            >
              <GameSetupRadio cardBgName='card1' cardBg={cardBg} setCardBg={setCardBg} />
              <GameSetupRadio cardBgName='card2' cardBg={cardBg} setCardBg={setCardBg} />
              <GameSetupRadio cardBgName='card3' cardBg={cardBg} setCardBg={setCardBg} />
            </div>

            <div
              className='row justify-content-center bg-light border border-bottom-0 border-top-0 text-center'
              style={{ height: '140px' }}
            >
              Radio buttons go here
            </div>

            <div
              className='row justify-content-center bg-light border rounded-bottom border-top-0 pb-4'
              style={{ height: '50px' }}
            >
              <div className='col-5 my-auto text-center'>
                <input
                  type='submit'
                  className='btn orange border'
                  value='Start Game'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default GameSetup;
