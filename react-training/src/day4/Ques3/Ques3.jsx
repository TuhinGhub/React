import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [entireName,setEntireName]=useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
   
   
  };
  const handleClick=()=>{
    setEntireName(inputValue);
   }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="show"
      />
      <button onClick={handleClick}>enter</button>
      <p>You typed: {entireName}</p>
    </div>
  );
};

export default InputComponent;