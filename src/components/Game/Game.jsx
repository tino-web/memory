import React, { useContext } from 'react';
import Tiles from '../Tiles/Tiles';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameSetup from '../GameSetup/GameSetup';
import { Context } from '../../context/gameContext';

function Game() {
  const { gameStarted } = useContext(Context);

  return (
    <div className='container'>
      {gameStarted
        ? (
          <>
            <Tiles />
            <ScoreBoard />
          </>
        )
        : <GameSetup />}
    </div>
  );
}

export default Game;
