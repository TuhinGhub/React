import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import About from "./About";
import {BrowserRouter} from "react-router-dom";

const Ques14 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route element={<Protected />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
};
export default Ques14;