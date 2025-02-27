import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Statstro2025 from './components/Statstro2025';
import Schedule from './components/statstro2024/Schedule';
import './App.css';
// import logo from '/Users/philvanlane/Documents/statstro/public/logo.svg';

function App() {
  return (
    <Router>
      <div className="Welcome bar">
        <div className="artLogo">
          <a href="https://astrostatuoft.com/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="ART Logo" width="150px" />
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Statstro2025 />} />
          <Route path="/2025" element={<Statstro2025 />} />
          <Route path="/2024" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
