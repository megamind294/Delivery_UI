import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "../src/First"
import AboutUs from "../src/Second"
import Services from '../src/Third'
import ConatctUs from '../src/Fourth'
import ReactDOM from 'react-dom/client';
import Head from '../src/Head'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Head/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/conatct" element={<ConatctUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

