import React from 'react';
import Tile from '../Tile/Tile';

function Tiles() {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const tilesComponents = tiles.map((tile) => <Tile key={tile} number={tile} />);

  return (
    <div className='d-flex justify-content-center'>
      <div className='tilesGrid mt-3'>
        {tilesComponents}
      </div>
    </div>
  );
}

export default Tiles;
