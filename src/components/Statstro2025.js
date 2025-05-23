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
          Wrangling Data: Big and Small
        </div>
        <hr className='hr'></hr>
        <div className='ty'>
          Thank for you for your participation!
        </div>
        <div className='attendee-info'>
          Slides and recordings (where available) can be found on the <a href="#/2025/schedule"><b>Schedule</b></a> page.
          <br></br>
          The registrant list can be found on the <a href="#/2025/registrants"><b>Registrants</b></a> page.
        </div>
        <div className='group-photo'>
          <img src={`${process.env.PUBLIC_URL}/images/group_photo.jpg`} alt='Attendees'/>
        </div>
        <hr className='hr'></hr>
      </div>
      <div className="about-content">
        <div className="statstro-logo">
          <img  src={`${process.env.PUBLIC_URL}/images/statstro_logo.png`} alt="Statstro 2025 Logo" />
        </div>
        <div className="about-text">
          <div className="important-details">
          WHEN: <span style={{color: 'rgb(100, 47, 0)'}}>May 14, 2025, 10:00am - 5:00pm EDT</span>
          <br></br>
          WHERE: <span style={{color: 'rgb(100, 47, 0)'}}>Cherry Room (9016), Department of Statistical Sciences, 700 University Avenue, 9th floor</span>
          </div>
        
          <div className="blurb">
          <span style={{fontWeight: 'bold',fontStyle: 'italics'}}>Sponsored by the Dunlap Institute and the Department of Statistical Sciences.</span>
          <br></br>
          <br></br>
          Zoom link for remote participants:
          <br></br>
          <b><a href="https://utoronto.zoom.us/j/84579586552" target="_blank" rel="noreferrer">https://utoronto.zoom.us/j/84579586552</a> (passcode: 376350)</b>
          <br></br>
          <br></br>
  
          We are thrilled to announce the <b>STATSTRO 2025 WORKSHOP</b>, co-hosted between the Department of Statistical Sciences, the Dunlap Institute for Astronomy & Astrophysics, and the David A. Dunlap Department of Astronomy & Astrophysics. Our theme for this year will be <b><i>Wrangling Data: Big and Small.</i></b> This 1-day workshop is intended to foster new and existing interdisciplinary collaborations between astronomy and statistics! Lunch will be provided.
          <br></br>
          <br></br>
          <i>Registration is now closed.</i>
            </div>
            </div>
      </div>
      <div className="footer">
    &copy; 2025 Astrostatistics Research Team at University of Toronto. The ART is based out of the <a href="https://www.statistics.utoronto.ca/" target="_blank" rel="noreferrer">Department of Statistical Sciences</a> and the <a href="https://www.astro.utoronto.ca/" target="_blank" rel="noreferrer">David A. Dunlap Department of Astronomy & Astrophysics</a>, with additional support from the <a href="https://www.dunlap.utoronto.ca/" target="_blank" rel="noreferrer">Dunlap Institute for Astronomy & Astrophysics</a> and the <a href="https://datasciences.utoronto.ca/" target="_blank" rel="noreferrer">Data Sciences Institute</a>.
    This website was built and designed by <a href="http://www.philvanlane.com" target="_blank" rel="noreferrer">Phil Van-Lane </a>.
      </div>
    </div>
  );
};

export default Statstro2025;
