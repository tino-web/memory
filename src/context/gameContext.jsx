import React, { useState, useEffect } from 'react';
import PropTypes from 'proptypes';
import tileSetInit from '../data/tileSet';
import getRandomNumberArr from '../utils/getRandomNumberArr';

const Context = React.createContext();

function ContextProvider({ children }) {
  const maxFlips = 2;
  const length = 20;
  const [flips, setFlips] = useState(0);
  const [tileSetObj] = useState(tileSetInit);
  const [tileLocationObj, setTileLocationObj] = useState(getRandomNumberArr(length, maxFlips));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerObj, setPlayerObj] = useState({
    1: {
      name: '',
      matched: 0,
      moves: 0,
    },
    2: {
      name: '',
      matched: 0,
      moves: 0,
    },
  });

  function handleSelect({ isMatched, position }) {
    const clickedTiles = tileLocationObj.filter((item) => item.isSelected);
    if (flips < maxFlips && !isMatched && clickedTiles.length < maxFlips) {
      setTileLocationObj((currentObj) => (
        currentObj.map((item) => {
          if (item.position !== position) return item;
          return {
            ...item,
            isSelected: true,
          };
        })
      ));
      setFlips((currentFlips) => currentFlips + 1);
    }
  }

  function swapPlayer() {
    setCurrentPlayer((prevPlayer) => {
      if (prevPlayer === 1) {
        return prevPlayer + 1;
      }
      return prevPlayer - 1;
    });
  }

  function updatePlayer(property, value = 1) {
    setPlayerObj((currentObj) => ({
      ...currentObj,
      [currentPlayer]: {
        ...currentObj[currentPlayer],
        [property]: currentObj[currentPlayer][property] + value,
      },
    }));
  }

  function resetSelectedTiles() {
    setTileLocationObj((currentData) => (
      currentData.map((item) => ({
        ...item,
        isSelected: false,
      }))
    ));
  }

  function newMove(nextPlayer) {
    setFlips(0);
    updatePlayer('moves', 1);

    if (nextPlayer) {
      swapPlayer();
      setTimeout(() => {
        resetSelectedTiles();
      }, 2000);
    } else {
      updatePlayer('matched', 1);
    }
  }

  useEffect(() => {
    const clickedTiles = tileLocationObj.filter((item) => item.isSelected);

    if (flips === maxFlips && clickedTiles.length === maxFlips) {
      const { tileId } = clickedTiles[0];
      const tilesMatch = clickedTiles.every((el) => el.tileId === tileId);

      if (tilesMatch) {
        setTileLocationObj((prevState) => (
          prevState.map((item) => {
            if (item.tileId !== tileId) return item;
            return {
              ...item,
              isMatched: true,
              isSelected: false,
            };
          })
        ));
        newMove();
      } else {
        newMove(true);
      }
    }
  }, [tileLocationObj, flips]);

  return (
    <Context.Provider value={{
      tileSetObj,
      tileLocationObj,
      handleSelect,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

ContextProvider.propTypes = { children: PropTypes.node.isRequired };
