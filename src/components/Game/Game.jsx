import React, { useContext } from 'react';
import Tiles from '../Tiles/Tiles';
import GameBar from '../GameBar/GameBar';
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
            <GameBar />
          </>
        )
        : <GameSetup />}
    </div>
  );
}

export default Game;
