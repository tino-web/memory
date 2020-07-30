import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import PlayerBox from '../PlayerBox/PlayerBox';
import Timer from '../Timer/Timer';

function GameBar() {
  const { playerObj, currentPlayer } = useContext(Context);

  const player1 = <PlayerBox player='1' isPlaying={currentPlayer === 1 && true} playerObj={playerObj[1]} />;
  const player2 = <PlayerBox player='2' isPlaying={currentPlayer === 2 && true} playerObj={playerObj[2]} />;

  return (
    <div className='row justify-content-center mt-3'>

      {player1}

      <Timer />

      {player2}

    </div>
  );
}

export default GameBar;
