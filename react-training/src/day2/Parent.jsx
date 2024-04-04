import React, { useState, useCallback } from 'react';

// Child component
const Child = ({ count, resetCount }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

// Parent component
const Parent = () => {
  const [count, setCount] = useState(0);

  // Callback function to increment count
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Callback function to reset count
  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      {/* Passing count state and resetCount function to Child */}
      <Child count={count} resetCount={resetCount} />
      {/* Button in Parent to increment count */}
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default Parent;
