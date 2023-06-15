import React, { useState } from "react";
import {Routes, Route , Link } from "react-router-dom";
import './App.css';

import Feed from './Feed/Feed';
import Signup from "./Signup/Signup";
import Login from './Login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;



// div style={{ background: color }}>
//         <Router>
//           <div><Link to="/"> Home</Link></div>
//           <Header />
//           <Route>
//             <Route path="/signup" element={<Signup />} />
//           </Route>
//         </Router>
//       </div>