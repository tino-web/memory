import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import PlayerBox from '../PlayerBox/PlayerBox';
import Timer from '../Timer/Timer';

function GameBar() {
  const {
    playerObj,
    currentPlayer,
    playerNumber,
    winner,
  } = useContext(Context);

  return (
    <div className='row justify-content-center mt-3'>
      <div className='col border rounded bg-light' style={{ maxWidth: '400px' }}>
        <div className='row'>
          <PlayerBox player='1' isPlaying={currentPlayer === 1 && true} playerObj={playerObj[1]} isWinner={winner === 1 && true} />
          <div className='col-2 p-0 text-center'>
            <div className='row'>
              <div className='col pt-1'>
                <h4><Timer /></h4>
              </div>
            </div>
            <div className='row'>
              <div className='col my-auto'>
                { playerNumber === 2
                  ? <span style={{ fontSize: '2.5rem' }}>vs</span>
                  : '' }
              </div>
            </div>
          </div>
          { playerNumber === 2
            ? <PlayerBox player='2' isPlaying={currentPlayer === 2 && true} playerObj={playerObj[2]} isWinner={winner === 2 && true} />
            : '' }
        </div>
      </div>

    </div>
  );
}

export default GameBar;
