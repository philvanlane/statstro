import React from 'react';
import './Schedule2025.css'; // Import the CSS file

const Schedule2025 = () => {
  return (
    <div className="schedule2025-container">
      <div className="sched-title-container">
        {/* <img className="saloon-sign" src={`${process.env.PUBLIC_URL}/images/saloon_sign.png`} alt="Saloon Sign" /> */}
        <h1 className="schedule-heading">
          Schedule <br></br>
        </h1>
      </div>
      <div className="schedule-content">
        Detailed schedule coming soon...
      </div>
    </div>
  );
};

export default Schedule2025;