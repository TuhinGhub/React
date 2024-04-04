import React, { useState } from "react";
const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random(1, 100)*100);
  
  const handleRandomNumber=()=>{
    const newRandomNumber = Math.random(1,100)*100;
    setRandomNumber(newRandomNumber)
   
  }


  return (
    <>
      <h2>Random Number Generator</h2>
      <p>Current RAndom Number: {randomNumber}</p>
      <button onClick={handleRandomNumber}>
        Click to generate a new random number
      </button>
    </>
  );
};

export default RandomNumberGenerator;
