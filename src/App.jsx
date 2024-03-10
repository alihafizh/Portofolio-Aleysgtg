import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile"; 
import Skill from "./pages/Skill";

export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
     <Route path="/skill" element={<Skill />} />
    </Routes>
  )
}