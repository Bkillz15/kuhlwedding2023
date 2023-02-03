import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Travel from "./Travel";
import RSVP from "./RSVP";
import Gallery from "./Gallery";

const App = ReactDOM.createRoot(document.getElementById('app'));

App.render(
  <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/travel" element={<Travel />}/>
        <Route path="/rsvp" element={<RSVP />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
  </BrowserRouter>
);

  
  // ReactDOM.render(<App />, document.getElementById("app"));
