import React from 'react';
import './sched-item.css'; // Import the CSS file

const SchedItem = ({items}) => {

  return (
    <div className='sched-block container'>
          {items.map((item, index) => (
            <div key={index} className="sched-item">
            <div className="sched-item-time">{item.time}&nbsp;
              {item.ltTalk &&
              <i class="fa-solid fa-bolt-lightning lt-talk"></i>}
              </div>
             <div className="sched-item-deets">
                 <div style={{fontSize:"large",marginBottom:"2px"}}>
                    {item.slides &&
                    <a href={`${process.env.PUBLIC_URL}/slides/` + item.slides} target="_blank" rel='noreferrer'>
                      <i class="fa-solid fa-file-pdf"
                      style={{color:"darkred",paddingRight:"10px"}}></i>
                      </a>
                      }
                      {item.recording &&
                    <a href={`${process.env.PUBLIC_URL}/recordings/` + item.recording} target="_blank" rel='noreferrer'>
                      <i class="fa-regular fa-circle-play"
                      style={{color:"black",paddingRight:"10px"}}></i>
                      </a>
                      }
                    {item.title}</div>
                 <i>{item.speaker}</i>
             </div>
            </div>
        ))}

    </div>
  );
};

export default SchedItem;