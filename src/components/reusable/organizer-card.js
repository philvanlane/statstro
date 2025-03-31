import React from "react";
import './organizer-card.css';

const OrganizerCard = (props) => {
  return (
    <div className="organizer-card-container">
      <div className="oc">
        <img className="oc-image" src={`${process.env.PUBLIC_URL}/images/headshots_2025/` + props.id + `.jpg`}
            alt={props.name} width="150px" />
        <p className='name'>{props.name}</p>
        {props.website &&
        <div className='site-button'>
    
            <a href={props.website} target="_blank" rel="noreferrer">
                Website
            </a>
        </div> 
        }
        <p className='bio'>{props.bio}</p>
      </div>
    </div>
  );
}

export default OrganizerCard;