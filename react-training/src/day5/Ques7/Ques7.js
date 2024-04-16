import React, { useState } from "react";
import axios from "axios";

const Ques7 = () => {
  const [input, setInput] = useState({ fname: "", lastname: "" });
  console.log("tur", input);
  //const [nxtinput,setNxtInput]=useState({lastname:''});
  const handleData = (e) => {
    setInput({
      fname: e.target.value,
    });
  };
  const handleSecondData = (e) => {
    setInput({ ...input, lastname: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", input)
      .then((response) => {
        console.log(input.fname + " " + input.lastname);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label> first name:</label>
      <input type="text" value={input?.fname} onChange={handleData}></input>
      <br />
      <label>Last name:</label>
      <input
        type="text"
        value={input?.lastname}
        onChange={handleSecondData}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

 export default Ques7;
