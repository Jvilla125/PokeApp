import React, { useState } from "react";
import {Routes, Route , Link } from "react-router-dom";
import './App.css';

import Feed from './Feed/Feed';
import Signup from "./Signup/Signup";
import Login from './Login/Login'
import FindPokemon from "./FindPokemon";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/findpokemon" element={<FindPokemon/>}/>
        <Route path="/myteam" element={<FindPokemon/>}/>
      </Routes>
    </>
  );
}

export default App;

