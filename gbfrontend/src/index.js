import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from "./components/App";
// import './index.css';



const index = ReactDOM.createRoot(document.getElementById('index'));
index.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);