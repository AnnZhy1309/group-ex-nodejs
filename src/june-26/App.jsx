import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

import NumberDisplay from "./NumberDisplay";
import WelcomeComponent from "./WelcomeComponent";
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";
import Students from "./Students";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/number" element={<NumberDisplay></NumberDisplay>}></Route>

        <Route path="/" element={<WelcomeComponent></WelcomeComponent>}></Route>

        <Route path="/card" element={<CardComponent></CardComponent>}></Route>

        <Route path="/students" element={<Students></Students>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <br />
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/card"}>Card</Link>
      <br />
      <Link to={"/number"}>Number</Link>
      <br />
      <Link to={"/students"}>Students</Link>
    </div>
  );
}

export default App;
