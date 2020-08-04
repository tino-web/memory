import React, { useState, useEffect, useContext } from 'react';
import { Context } from '@context/gameContext';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const { timerIsActive } = useContext(Context);

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

  const timer = `${Math.floor(seconds / 60)}:${(`0${Math.floor(seconds % 60)}`).slice(-2)}`;

  return (
    <>
      {timer}
    </>
  );
}

export default Timer;
