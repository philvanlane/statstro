import React from 'react';
import './sched-break.css'; // Import the CSS file

const SchedBreak = ({time}) => {

  return (
    <div className='break container'>
        <div className="sched-name-and-time">
            <div className="sched-time">{time}</div>
            <div>BREAK</div>
        </div>        
    </div>
  );
};

export default SchedBreak;