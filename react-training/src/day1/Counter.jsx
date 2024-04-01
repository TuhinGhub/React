/* 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen.*/
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}