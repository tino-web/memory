import React, { useContext } from 'react';
import Tile from '../Tile/Tile';
import { Context } from '../../context/gameContext';

function Tiles() {
  const {
    tileSetObj,
    tileLocationObj,
    handleSelect,
  } = useContext(Context);

  const tilesComponents = tileLocationObj.map((tileLocationItem) => {
    const tileSetItem = tileSetObj.tiles.find((el) => el.tileId === tileLocationItem.tileId);
    return (
      <Tile
        key={tileLocationItem.position}
        tileSetItem={tileSetItem}
        handleClick={handleSelect}
        tileLocationItem={tileLocationItem}
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
