import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import GameSetup from '../GameSetup/GameSetup';
import Tiles from '../Tiles/Tiles';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameEnder from '../GameEnder/GameEnder';

function Game() {
  const {
    gameStarted,
    gameEnded,
  } = useContext(Context);

  let onDisplay;

  if (!gameStarted && !gameEnded) {
    onDisplay = <GameSetup />;
  } else if (gameStarted && !gameEnded) {
    onDisplay = (
      <>
        <Tiles />
        <ScoreBoard />
      </>
    );
  } else if (gameStarted && gameEnded) {
    onDisplay = (
      <>
        <GameEnder />
        <ScoreBoard />
      </>
    );
  }

  return (
    <div className='container'>
      {onDisplay}
    </div>
  );
}

export default Game;
