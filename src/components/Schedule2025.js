import React from 'react';
import './Schedule2025.css'; // Import the CSS file

const Schedule2025 = () => {
  return (
    <div className="schedule2025-container">
      <div className="title-container">
        {/* <img className="saloon-sign" src={`${process.env.PUBLIC_URL}/images/saloon_sign.png`} alt="Saloon Sign" /> */}
        <h1 className="heading">
          STATSTRO 2025 <br></br>
        </h1>
        <div className="subheading">
          Wrangling Big Data
        </div>
      </div>
      <div className="content">
        May 14, 2025
        <br></br>
        Schedule coming soon...
      </div>
    </div>
  );
};

export default Schedule2025;