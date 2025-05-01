import React from 'react';
import './Schedule2025.css'; // Import the CSS file
import ScheduleBlock from './reusable/schedule-block';

const Schedule2025 = () => {
  return (
    <div className="schedule2025-container">
      <div className="sched-title-container">
        {/* <img className="saloon-sign" src={`${process.env.PUBLIC_URL}/images/saloon_sign.png`} alt="Saloon Sign" /> */}
        <h1 className="schedule-heading">
          Schedule <br></br>
        </h1>
      </div>
      <ScheduleBlock className="sched-card"/>
    </div>
  );
};

export default Schedule2025;