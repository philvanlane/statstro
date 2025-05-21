import React from 'react';
import './Organizers2025.css';
import {bios,websites} from './profile_descriptions';
import OrganizerCard from './reusable/organizer-card';

const Organizers2025 = () => {
    return (
        <div className="organizers2025-container">
        <div className="org-title-container">
            <h1 className="org-heading">
            Organizers
            </h1>
        </div>
        <div className="org-content">
            <OrganizerCard className="organizer-card-container"
                            name={'Joshua S. Speagle (沈佳士)'}
                            website={websites.josh_speagle}
                            bio={bios.josh_speagle} 
                            id = {'josh_speagle'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Gwendolyn Eadie'}
                            website={websites.gwen_eadie}
                            bio={bios.gwen_eadie} 
                            id = {'gwen_eadie'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Samantha Berek'}
                            website={websites.sam_berek}
                            bio={bios.sam_berek} 
                            id = {'sam_berek'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Biprateep Dey'}
                            website={websites.biprateep_dey}
                            bio={bios.biprateep_dey} 
                            id = {'biprateep_dey'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Mairead Heiger'}
                            website={websites.mairead_heiger}
                            bio={bios.mairead_heiger} 
                            id = {'mairead_heiger'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Kevin McKinnon'}
                            website={websites.kevin_mckinnon}
                            bio={bios.kevin_mckinnon} 
                            id = {'kevin_mckinnon'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Doga Tolgay'}
                            website={websites.doga_tolgay}
                            bio={bios.doga_tolgay} 
                            id = {'doga_tolgay'}/>
            <OrganizerCard className="organizer-card-container"
                            name={'Phil Van-Lane'}
                            website={websites.phil_vanlane}
                            bio={bios.phil_vanlane} 
                            id = {'phil_vanlane'}/>
        </div>
        </div>
    );
    
};

export default Organizers2025;