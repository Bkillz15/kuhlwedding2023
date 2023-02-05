import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Travel from "./Travel";
import RSVP from "./RSVP";
import Gallery from "./Gallery";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/travel" element={<Travel />}/>
        <Route path="/rsvp" element={<RSVP />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </div>
  );
}
