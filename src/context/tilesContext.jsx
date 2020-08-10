import React, { useState } from 'react';
import PropTypes from 'proptypes';
import tileSetObjInit from '../data/tileSet';

const TilesContext = React.createContext();

function TilesContextProvider({ children }) {
  const [selectedTileSet, setSelectedTileSet] = useState(2);
  const [tileSetObj, setTileSetObj] = useState(tileSetObjInit);

  function getSelectedTileSet() {
    return tileSetObj.find((item) => item.tileSetId === selectedTileSet);
  }

  // function addTile(newTileId, setId) {
  //   const newTile = {
  //     tileId: newTileId,
  //     fileName: `${setId}_${newTileId}`,
  //   }
  //   setTileSetObj((prevObj) => {
  //     const newObj = prevObj.map((set) => 
  //     )
  //   })
  // }

  function getMaxTileId(setId) {
    const findSet = tileSetObj.find((item) => item.tileSetId === Number(setId));
    if (findSet.tiles.length > 0) {
      return findSet.tiles.reduce((p, c) => (p.tileId > c.tileId ? p.tileId : c.tileId));
    }
    return 0;
  }

  function addTileSet(nameSet) {
    const maxId = tileSetObj.reduce((p, c) => (p.tileSetId > c.tileSetId ? p.tileSetId : c.tileSetId));
    setTileSetObj((prevObj) => {
      const newObj = (
        [...prevObj,
          {
            tileSetId: maxId + 1,
            stored: 'local',
            name: nameSet,
            tiles: [],
          },
        ]
      );
      return newObj;
    });
  }

  return (
    <TilesContext.Provider value={{
      tileSetObj,
      getSelectedTileSet,
      addTileSet,
      getMaxTileId,
    }}
    >
      {children}
    </TilesContext.Provider>
  );
}

export { TilesContextProvider, TilesContext };

TilesContextProvider.propTypes = { children: PropTypes.node.isRequired };
