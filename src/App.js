import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Statstro2025 from './components/Statstro2025';
import Organizers2025 from './components/Organizers2025';
import './App.css';
import Schedule2025 from './components/Schedule2025';
// import logo from '/Users/philvanlane/Documents/statstro/public/logo.svg';

function App() {
  return (
    <div className = 'container-xl app-class'>
    <Router>
      <nav className="navbar">
        <div>
          <a href="https://astrostatuoft.com/" target="_blank" rel="noopener noreferrer">
            <img className="artLogo" src={`${process.env.PUBLIC_URL}/logo.svg`} alt="ART Logo" width="150px" />
          </a>
        </div>
        <div className="nav-links">
          <div className="route-link">
            <a className="link" href="/#/2025">About</a>
          </div>
          <div className="route-link">
            <a className="link" href="/#/2025/schedule">Schedule</a>
          </div>
          <div className="route-link">
            <a className="link" href="/#/2025/organizers">Organizers</a>
          </div>
          <div className="register-button">
            <a className="link"  target="_blank" rel="noreferrer"href="https://docs.google.com/forms/d/e/1FAIpQLSfJglL53dmthZWVI3CofUMhnibFEWr5sVR3-NoFrbWm9Hy8bg/viewform?usp=dialog">REGISTER</a>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Statstro2025/>} />
          <Route path="/2025" element={<Statstro2025/>} />
          <Route path="/2025/schedule" element={<Schedule2025/>} />
          <Route path="/2025/organizers" element={<Organizers2025/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
