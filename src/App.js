import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Statstro2025 from './components/Statstro2025';
import Schedule from './components/statstro2024/Schedule';
import './App.css';

function App() {
  return (
    <div className="Welcome bar">
        <div className="headText">
          <img className="logo" src='./images/logo.svg' alt="ART Logo" />
        </div>
      <Router>
        <Routes>
          <Route path="/" element={<Statstro2025 />} />
          <Route path="/2025" element={<Statstro2025 />} />
          <Route path="/2024" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
