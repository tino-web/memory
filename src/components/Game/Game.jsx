import React from 'react';
import Tiles from '../Tiles/Tiles';
import GameBar from '../GameBar/GameBar';

function Game() {
  return (
    <div className='container'>
      <Tiles />
      <GameBar />
    </div>
  );
}

export default Game;
