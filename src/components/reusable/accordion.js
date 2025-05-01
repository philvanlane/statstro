import React, { useState } from 'react';
import './accordion.css'; // Import the CSS file

const Accordion = ({time,title,chair,children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='acc container'>
      <div className="acc-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="name-and-time">
            <div className="time">{time}</div>
            <div>{title}</div>
            {chair && (
            <div className='chair-name'>&nbsp;&nbsp;&nbsp;
          (Chair: {chair})
        </div>
      )}     
      </div>
        <div className="expand-arrow" style={{transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
        <i class="fa-solid fa-caret-right"/>
        </div>
      </div>
      {isOpen && (
        <div className='acc-content'>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;