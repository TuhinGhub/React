import React, { useState } from "react";

const Ques3 = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
};
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <p>This is Tuhin</p>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
};
export default Ques3;
