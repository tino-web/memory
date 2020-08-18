import React, { useContext, useEffect } from 'react';
import { Prompt } from 'react-router-dom';

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
    newGame,
  } = useContext(GameContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (() => (newGame())), []);

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
      <Prompt
        when={gameStarted && !gameEnded}
        message='Are you sure you want to leave your game?'
      />
      {showComponents}
    </div>
  );
}

export default Game;
