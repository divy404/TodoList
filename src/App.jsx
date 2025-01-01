// src/app.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Loginpage from "./pages/Loginpage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/contact" element={<Contactpage/>} />
        <Route path="/login" element={<Loginpage/>} />
       
      </Routes>
    </Router>
  );
}

