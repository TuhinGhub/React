import React, { useState, useEffect, useRef } from 'react';

// Custom hook useTimer
const useTimer = (duration) => {
  const [timer, setTimer] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTimer(duration);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return { timer, isActive, startTimer, pauseTimer, resetTimer };
};

// Component using useTimer hook
const CountdownTimer = ({ duration }) => {
  const { timer, isActive, startTimer, pauseTimer, resetTimer } = useTimer(duration);

  return (
    <div>
      <h2>Countdown Timer: {timer} seconds</h2>
      <button onClick={startTimer} disabled={isActive}>Start</button>
      <button onClick={pauseTimer} disabled={!isActive}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
