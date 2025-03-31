import React from 'react';
import './Statstro2025.css'; // Import the CSS file

const Statstro2025 = () => {
  return (
    <div className="statstro2025-container">
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
        More information coming soon...
      </div>
    </div>
  );
};

export default Statstro2025;
