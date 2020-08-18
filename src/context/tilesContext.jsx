import React, { useState } from 'react';
import PropTypes from 'proptypes';
import tileSetObjInit from '../data/tileSets';
import tileItemsObjInit from '../data/tileItems';
import useTileSets from '../hooks/useTileSets';
import useTileItems from '../hooks/useTileItems';

const TilesContext = React.createContext();

function TilesContextProvider({ children }) {
  const [selectedTileSet, setSelectedTileSet] = useState(2);
  const [tileSetObj, setTileSetObj] = useTileSets(tileSetObjInit);
  const [tileItemObj, setTileItemObj] = useTileItems(tileItemsObjInit);

  // Used for Game
  function getSelectedTileSet() {
    return tileSetObj.find((item) => item.tileSetId === selectedTileSet);
  }

  function getTiles(setId = selectedTileSet) {
    const selectedTiles = tileItemObj.filter((item) => item.tileSetId === Number(setId));
    return selectedTiles;
  }

  function addTile(newTileId, setId) {
    const newTile = {
      tileId: Number(newTileId),
      tileSetId: Number(setId),
      fileName: `${setId}_${newTileId}`,
    };
    setTileItemObj((prevObj) => ([
      ...prevObj,
      newTile,
    ]));
  }

  function deleteTile(tileId, setId, fileName) {
    setTileItemObj((prevItems) => {
      const filteredItems = prevItems.filter((item) => (
        item.tileSetId !== Number(setId) || item.tileId !== Number(tileId)
      ));
      return filteredItems;
    });
    localStorage.removeItem(fileName);
  }

  function addTileSet(nameSet) {
    const maxId = tileSetObj.reduce((prev, curr) => (
      (prev.tileSetId > curr.tileSetId ? prev.tileSetId : curr.tileSetId)
    ));
    setTileSetObj((prevObj) => ([...prevObj,
      {
        tileSetId: maxId + 1,
        stored: 'local',
        name: nameSet,
      },
    ]));
  }

  function deleteTileSet(setId) {
    setTileSetObj((prevObj) => {
      const filteredSet = prevObj.filter((item) => item.tileSetId !== Number(setId));
      return filteredSet;
    });
    const tileList = getTiles(setId);
    tileList.forEach((item) => deleteTile(item.tileId, item.tileSetId, item.fileName));
  }

  function getMaxTileId(setId) {
    const tileList = getTiles(setId);
    if (tileList.length > 0) {
      return Math.max(...tileList.map((item) => item.tileId), 0);
    }
    return 0;
  }

  return (
    <TilesContext.Provider value={{
      tileSetObj,
      tileItemObj,
      getSelectedTileSet,
      addTileSet,
      deleteTileSet,
      getMaxTileId,
      getTiles,
      addTile,
      deleteTile,
    }}
    >
      {children}
    </TilesContext.Provider>
  );
}

export { TilesContextProvider, TilesContext };

TilesContextProvider.propTypes = { children: PropTypes.node.isRequired };
