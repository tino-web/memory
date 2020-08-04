import React, { useContext } from 'react';
import { Context } from '@context/gameContext';
import GameSetup from '@components/GameSetup/GameSetup';
import Tiles from '@components/Tiles/Tiles';
import ScoreBoard from '@components/ScoreBoard/ScoreBoard';
import GameEnder from '@components/GameEnder/GameEnder';

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
