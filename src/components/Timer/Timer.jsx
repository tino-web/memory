import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/gameContext';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { gameStarted, timerIsActive } = useContext(Context);

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
    <div className='col col-3 col-sm-3 col-lg-2 text-center'>
      <h3>
        {`${Math.floor(seconds / 60)}:${(`0${Math.floor(seconds % 60)}`).slice(-2)}`}
      </h3>
    </div>
  );
}

export default Timer;
