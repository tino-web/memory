import React, { useContext } from 'react';
import { GameContext } from '../../../context/gameContext';
import ScoreBoardPlayerBox from './ScoreBoardPlayerBox';
import ScoreBoardTimer from './ScoreBoardTimer';

function ScoreBoard() {
  const {
    playerObj,
    currentPlayer,
    playerNumber,
    winner,
  } = useContext(GameContext);

  return (
    <div className='row justify-content-center mt-3'>
      <div
        className='col border rounded bg-light'
        style={{ maxWidth: '400px' }}
      >
        <div className='row'>
          <ScoreBoardPlayerBox
            player='1'
            isPlaying={currentPlayer === 1 && true}
            playerObj={playerObj[1]}
            isWinner={winner === 1 && true}
          />

          <div className='col-2 p-0 text-center'>
            <div className='row'>
              <div className='col pt-1'>
                <h4>
                  <ScoreBoardTimer />
                </h4>
              </div>
            </div>
            <div className='row'>
              <div className='col my-auto'>
                <span style={{ fontSize: '2.5rem' }}>
                  { playerNumber === 2
                    ? 'vs'
                    : '' }
                </span>
              </div>
            </div>
          </div>

          { playerNumber === 2
            ? (
              <ScoreBoardPlayerBox
                player='2'
                isPlaying={currentPlayer === 2 && true}
                playerObj={playerObj[2]}
                isWinner={winner === 2 && true}
              />
            )
            : '' }

        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
