import React, { useContext } from 'react';
import GameTile from './GameTile';
import { TilesContext } from '../../context/tilesContext';
import { GameContext } from '../../context/gameContext';

function GameTiles() {
  const { getTiles } = useContext(TilesContext);

  const {
    tileLocationObj,
    handleSelect,
    tileBg,
  } = useContext(GameContext);

  const tileItems = getTiles();
  const tilesComponents = tileLocationObj.map((tileLocationData) => {
    const tileData = tileItems.find((item) => item.tileId === tileLocationData.tileId);
    return (
      <GameTile
        key={tileLocationData.position}
        tileData={tileData}
        handleClick={handleSelect}
        tileLocationData={tileLocationData}
        tileBg={tileBg}
      />
    );
  });

  return (
    <div className='d-flex justify-content-center'>
      <div className='tilesGrid mt-3'>
        {tilesComponents}
      </div>
    </div>
  );
}

export default GameTiles;
