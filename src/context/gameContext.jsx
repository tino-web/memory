import React, { useState, useEffect } from 'react';
import PropTypes from 'proptypes';
import playerObjInit from '../data/playerObj';
import getRandomNumberArr from '../utils/getRandomNumberArr';

const GameContext = React.createContext();

function GameContextProvider({ children }) {
  const maxFlips = 2;
  const length = 20;
  const [pairsLeft, setPairsLeft] = useState(length / maxFlips);
  const [flips, setFlips] = useState(0);
  const [tileLocationObj, setTileLocationObj] = useState(getRandomNumberArr(length, maxFlips));
  const [currentPlayer, setCurrentPlayer] = useState(1); // default: 1
  const [gameStarted, setGameStarted] = useState(true); // default: false
  const [gameEnded, setGameEnded] = useState(false); // default: false
  const [timerIsActive, setTimerIsActive] = useState(false); // default: false
  const [tileBg, setTileBg] = useState('card1'); // default: card1
  const [playerNumber, setPlayerNumber] = useState(2); // default: 1
  const [winner, setWinner] = useState(0); // default: 0
  const [playerObj, setPlayerObj] = useState(playerObjInit);

  function checkGameStarted() {
    if (playerObj[1].moves === 0) {
      setGameStarted(true);
      setTimerIsActive(true);
    }
  }

  function handleSelect({ isMatched, position }) {
    const selectedTiles = tileLocationObj.filter((item) => item.isSelected);
    checkGameStarted();
    if (flips < maxFlips && !isMatched && selectedTiles.length < maxFlips) {
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

  function resetSelectedTiles() {
    setTileLocationObj((currentData) => (
      currentData.map((item) => ({
        ...item,
        isSelected: false,
      }))
    ));
  }

  function swapPlayer() {
    setCurrentPlayer((prevPlayer) => {
      if (prevPlayer === 1) {
        return prevPlayer + 1;
      }
      return prevPlayer - 1;
    });
  }

  function updatePlayer(property, value = 1, player = currentPlayer) {
    setPlayerObj((currentObj) => ({
      ...currentObj,
      [player]: {
        ...currentObj[player],
        [property]: currentObj[player][property] + value,
      },
    }));
  }

  function newMove(nextPlayer) {
    setFlips(0);
    updatePlayer('moves', 1);

    if (nextPlayer) {
      setTimeout(() => {
        resetSelectedTiles();
        if (playerNumber === 2) {
          swapPlayer();
        }
      }, 2000);
    } else {
      updatePlayer('matched', 1);
    }
  }

  function newGame() {
    setGameEnded(false);
    setGameStarted(false);
    setPlayerObj(playerObjInit);
    setPairsLeft(length / maxFlips);
    setTileLocationObj(getRandomNumberArr(length, maxFlips));
    setCurrentPlayer(1);
    setWinner(0);
    setFlips(0);
  }

  function checkMatches() {
    const selectedTiles = tileLocationObj.filter((item) => item.isSelected);
    if (selectedTiles.length === maxFlips) {
      const { tileId } = selectedTiles[0];
      const tilesMatch = selectedTiles.every((el) => el.tileId === tileId);

      if (tilesMatch) {
        setTimeout(() => {
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
          setPairsLeft((prevLeft) => prevLeft - 1);
          newMove();
        }, 1000);
      } else {
        newMove(true);
      }
    }
  }

  useEffect(() => {
    if (flips === maxFlips) {
      checkMatches();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flips]);

  useEffect(() => {
    if (pairsLeft === 0) {
      if (playerObj[1].matched > playerObj[2].matched) {
        setWinner(1);
      } else if (playerObj[2].matched > playerObj[1].matched) {
        setWinner(2);
      } else {
        setWinner(0);
      }
      setGameEnded(true);
      setTimerIsActive(false);
      setCurrentPlayer(0);
    }
  }, [pairsLeft, winner, playerObj]);

  return (
    <GameContext.Provider value={{
      tileLocationObj,
      handleSelect,
      playerObj,
      currentPlayer,
      setGameStarted,
      gameStarted,
      timerIsActive,
      updatePlayer,
      setTileBg,
      tileBg,
      setPlayerNumber,
      playerNumber,
      gameEnded,
      winner,
      newGame,
    }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContextProvider, GameContext };

GameContextProvider.propTypes = { children: PropTypes.node.isRequired };
