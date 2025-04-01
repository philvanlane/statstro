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
      </div>
      <div className="about-content">
        <img className="statstro-logo" src={`${process.env.PUBLIC_URL}/images/statstro_logo.png`} alt="Statstro 2025 Logo" />
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
          We are thrilled to announce the <b>STATSTRO 2025 WORKSHOP</b> (formerly Stellar Stats), co-hosted between the Department of Statistical Sciences, the Dunlap Institute for Astronomy & Astrophysics, and the David A. Dunlap Department of Astronomy & Astrophysics. Our theme for this year will be <b><i>Wrangling Data: Big and Small.</i></b>
          This 1-day workshop is intended to foster new and existing interdisciplinary collaborations between astronomy and statistics!
          There will be FREE LUNCH and no registration fee. This will be a hybrid meeting with both in-person and online participation options.
          Anyone interested is encouraged to attend (including summer students)! Please register using the link on this site
          by <b><i>11:59 pm on Wednesday, April 30th</i></b> so we know how much food to order. (You are still welcome to attend even if you don’t end up registering by the deadline!)
          Early career researchers (undergraduate students, graduate students, and postdoctoral researchers) who are interested in attending are also highly encouraged to sign up to give a 5-minute lightning talk highlighting their work.
            </div>
            </div>
      </div>
    </div>
  );
};

export default Statstro2025;
