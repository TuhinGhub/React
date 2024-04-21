import React, { useState } from "react";

const Ques4 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const i = 9;

    console.log("Form Submitted", username, password);
    if (i === 9) {
      throw new Error("Crashed");
    }
  };

  return (
    <>
      <div className="login">
        <label>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="submitButton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Ques4;