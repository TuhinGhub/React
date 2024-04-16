import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (name === "Tuhin" && password === "passkey0") {
      localStorage.setItem("login", true);
    }
    localStorage.getItem("login") ? navigate("/about") : navigate("/login");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>loggin</button>
      </div>
    </>
  );
};

export default Login;