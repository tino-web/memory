import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../../context/gameContext';

function ScoreBoardTimer() {
  const [seconds, setSeconds] = useState(0);
  const { timerIsActive } = useContext(GameContext);

  const timer = `${Math.floor(seconds / 60)}:${(`0${Math.floor(seconds % 60)}`).slice(-2)}`;

  useEffect(() => {
    let interval = null;
    if (timerIsActive) {
      interval = setInterval(() => {
        setSeconds((secs) => secs + 1);
      }, 1000);
    } else if (!timerIsActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerIsActive, seconds]);

  return (
    <>
      {timer}
    </>
  );
}

export default ScoreBoardTimer;
