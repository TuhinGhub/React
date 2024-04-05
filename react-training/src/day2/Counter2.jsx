import React, { useState } from "react";
const Counter2 = () => {
  const [count, setCount] = useState(0);

  const incrementcount = () => {
    setCount(count + 1);
  };
  const decrementcount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
    </div>

  );
};
export default Counter2;
