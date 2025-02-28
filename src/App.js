import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Statstro2025 from './components/Statstro2025';
import Schedule from './components/statstro2024/Schedule';
import './App.css';
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
      </nav>
      <Switch>
          <Route exact path="/" component={Statstro2025} />
          <Route path="/2025" component={Statstro2025} />
          <Route path="/2024" component={Schedule} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
