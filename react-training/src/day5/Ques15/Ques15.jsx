import React from "react";
import withLogger from "./withLogger";

const Ques15 = ({ increment, count }) => {
  return (
    <>
      <h2>HOC Mounting, Unmounting, Update</h2>
        <button onClick={increment}>
          <div> {count}</div> Increment
        </button>
    </>
  );
};

export default withLogger(Ques15);