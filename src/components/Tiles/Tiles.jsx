import React from 'react';
import Tile from '../Tile/Tile';
import getRandomArray from '../../utils/getRandomArray';

function Tiles() {
  const tileSet = {
    tileSetId: 1,
    name: 'First set',
    tiles: [{
      tileId: 1,
      fileName: '1_1.jpg',
      name: 'Summer',
    },
    {
      tileId: 2,
      fileName: '1_2.jpg',
      name: 'Summer',
    },
    {
      tileId: 3,
      fileName: '1_3.jpg',
      name: 'Summer',
    },
    {
      tileId: 4,
      fileName: '1_4.jpg',
      name: 'Summer',
    },
    {
      tileId: 5,
      fileName: '1_5.jpg',
      name: 'Summer',
    },
    {
      tileId: 6,
      fileName: '1_6.jpg',
      name: 'Summer',
    },
    {
      tileId: 7,
      fileName: '1_7.jpg',
      name: 'Summer',
    },
    {
      tileId: 8,
      fileName: '1_8.jpg',
      name: 'Summer',
    },
    {
      tileId: 9,
      fileName: '1_9.jpg',
      name: 'Summer',
    },
    {
      tileId: 10,
      fileName: '1_10.jpg',
      name: 'Summer',
    },
    ],
  };

  const tileLocationArray = getRandomArray(20);

  const tilesComponents = tileLocationArray.map((tileId, index) => (
    <Tile
      key={index}
      tileData={tileSet.tiles[tileId - 1]}
    />
  ));

  return (
    <div className='d-flex justify-content-center'>
      <div className='tilesGrid mt-3'>
        {tilesComponents}
      </div>
    </div>
  );
}

export default Tiles;
