import React from 'react';
import './sched-item.css'; // Import the CSS file

const SchedItem = ({items}) => {

  return (
    <div className='sched-block container'>
          {items.map((item, index) => (
            <div key={index} className="sched-item">
            <div className="sched-item-time">{item.time}</div>
             <div className="sched-item-deets">
                 <div style={{fontSize:"large",marginBottom:"2px"}}>{item.title}</div>
                 <i>{item.speaker}</i>
             </div>
            </div>
        ))}

    </div>
  );
};

export default SchedItem;