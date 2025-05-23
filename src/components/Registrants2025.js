import React from 'react';
import './Registrants2025.css';
import { registrants } from './registrants';

const Registrants2025 = () => {
    return (
        <div className="registrants2025-container">
            <div className="reg-title-container">
                List of 2025 registrants:
            </div>
            <div className="registration-list">
                {registrants.map((registrant, index) => (
                    <div key={index} className="registration-item">
                        {registrant}
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Registrants2025;