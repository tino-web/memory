import React, { useContext } from 'react';
import Tile from '../Tile/Tile';
import {Context} from '../../context/gameContext';

function Tiles() {
  const {
    tileSetObj,
    tileLocationObj,
  } = useContext(Context);

  const tilesComponents = tileLocationObj.map((tile) => {
    const tileData = tileSetObj.tiles.find((itm) => itm.tileId === tile.tileId);
    return (
      <Tile
        key={tile.position}
        tileData={tileData}
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

export default Tiles;
