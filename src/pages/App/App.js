import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

import Signup from './Signup/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;