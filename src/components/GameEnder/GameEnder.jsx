import React, {useContext} from 'react';
import { Context } from '../../context/gameContext';

function GameEnder() {
  const {
    winner,
    playerObj,
    newGame,
  } = useContext(Context);

  let winnerTitle;
  let winnerImg;

  if (winner === 0) {
    winnerTitle = 'it\'s a DRAW!';
    winnerImg = 'https://media.giphy.com/media/3ov9jKR2g36eWaTvXi/giphy.gif';
  } else {
    winnerTitle = `${playerObj[winner].name} wins!`;
    winnerImg = 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif';
  }

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col pt-4 text-center' style={{ maxWidth: '400px' }}>

          <div className='row bg-light border rounded-top border-bottom-0' style={{ height: '70px', paddingTop: '20px' }}>
            <div className='col my-auto'>
              <h2>{winnerTitle}</h2>
            </div>
          </div>

          <div className='row bg-light border border-bottom-0 border-top-0' style={{ height: '200px' }}>
            <div className='col my-auto'>
              <img
                src={winnerImg}
                width='300px'
                alt=''
              />
            </div>
          </div>

          <div className='row bg-light border rounded-bottom border-top-0 pb-4' style={{ height: '55px' }}>
            <div className='col my-auto'>
              <button type='button' className='btn orange border' onClick={newGame}>New Game</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default GameEnder;
