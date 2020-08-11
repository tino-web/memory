import React, { useContext } from 'react';
import { GameContext } from '../../context/gameContext';

import GameSetup from './GameSetup/GameSetup';
import GameTiles from './GameTiles';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import GameEnder from './GameEnder';
import './Game.css';

function Game() {
  const {
    gameStarted,
    gameEnded,
  } = useContext(GameContext);

  let showComponents;

  if (!gameStarted && !gameEnded) {
    showComponents = (
      <>
        <GameSetup />
      </>
    );
  } else if (gameStarted && !gameEnded) {
    showComponents = (
      <>
        <GameTiles />
        <ScoreBoard />
      </>
    );
  } else if (gameStarted && gameEnded) {
    showComponents = (
      <>
        <GameEnder />
        <ScoreBoard />
      </>
    );
  }

  return (
    <div className='container'>
      {showComponents}
    </div>
  );
}

export default Game;
