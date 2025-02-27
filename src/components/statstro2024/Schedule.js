import React from 'react';
import './style.css'; // Import the CSS file

const Schedule = () => {
    return (
        <div>
            <header>
                <a href="https://astrostatuoft.com" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src="img/ARTlogo-update.svg" alt="ART Logo" />
                </a>
                <nav>
                    <ul>
                        <li><a className="btn" href="index.html">Home</a></li>
                        <li><a className="btn" href="schedule.html">Schedule</a></li>
                        <li><a className="btn" href="about.html">About</a></li>
                    </ul>
                </nav>
            </header>
            <section className="banner">
                <div className="card card-fixed text-card-center">
                    <h1 className="big-title">STATSTRO 2024 (formerly Stellar Stats):<br /> The AIstronomy Revolution</h1>
                </div>
            </section>

            <section className="list-box">
                <div className="card text-card">
                    <h2 className="h2-title">Morning Talks (10:00 - 11:20)</h2>
                    <p>10:00 - 10:05 - Opening remarks - <em>Josh Speagle/Gwen Eadie (Stats/Astro)</em></p>
                    <p>10:05 - 10:25 - Large Language Models in Astronomy - <em>Yuan-Sen Ting (ANU/OSU, Dunlap Visitor)</em></p>
                    <p>10:25 - 10:45 - Self-Supervised Learning of Stars with Transformers - <em>Henry Leung (Astro)</em></p>
                    <p>10:45 - 11:05 - Using Graph Neural Networks and Simulation-Based Inference to Probe Cold Dark Matter Sub-halo Perturbations in Stellar Streams - <em>Peter Ma (Astro/Stats)</em></p>
                    <p>11:05 - 11:20 - Break</p>
                </div>
                <div className="card text-card">
                    <h2 className="h2-title">AI in Focus Session (11:20 - 12:30)</h2>
                    <p>11:20 - 11:30 - AI in Scientific Workflows - <em>Rohan Alexander (Stats)</em></p>
                    <p>11:30 - 11:40 - AI and Human-Computer Interactions - <em>Fanny Chevalier (Stats)</em></p>
                    <p>11:40 - 11:50 - AI and Pedagogy - <em>Nathalie Moon (Stats)</em></p>
                    <p>11:50 - 12:30 - Invited Panel Discussion - <em>Rohan Alexander (Stats), Fanny Chevalier (Stats), & Nathalie Moon (Stats)</em></p>
                </div>
                <div className="card text-card">
                    <h2 className="h2-title">Lunch (12:30 - 13:45)</h2>
                    <p>12:30 - 12:45 - Group Photo</p>
                    <p>12:45 - 13:45 - Catered Lunch</p>
                </div>
                <div className="card text-card">
                    <h2 className="h2-title">Afternoon Talks (13:35 - 14:50)</h2>
                    <p>13:35 - 13:55 - Scaling Laws for Galaxy Images - <em>Michael Walmsley (Dunlap)</em></p>
                    <p>13:55 - 14:15 - Flexible Models for Noisy Observations: a Blessing and a Curse - <em>Reed Essick (CITA)</em></p>
                    <p>14:15 - 14:35 - Trustworthy/Interpretable AI - <em>Qiang Sun (Stats)</em></p>
                    <p>14:35 - 14:50 - Break</p>
                </div>
                <div className="card text-card">
                    <h2 className="h2-title">Lightning Talks (14:50 - 15:45)</h2>
                    <p>14:50 - 14:57 - Inferring reionization history with quasar proximity zone data using simulation-based inference - <em>Hanquing Chen (CITA)</em></p>
                    <p>14:57 - 15:04 - Closing the stellar labels gap: fully data-driven modelling of stellar spectra - <em>Alex Laroche (Astro)</em></p>
                    <p>15:04 - 15:11 - Progenitors of Milky Way mass galaxies with JWST resolved photometry - <em>Vivian Tan (Astro @ York)</em></p>
                    <p>15:11 - 15:18 - Using Stellar Catalogues for 3D Radiative Mapping of our Galaxy - <em>Ioana Zelko (CITA)</em></p>
                    <p>15:18 - 15:25 - Detecting stellar flares in photometric data using hidden Markov models - <em>Arturo Esquivel (CITA)</em></p>
                    <p>15:25 - 15:32 - Astrophysical transient detection applied to calcium imaging of the brain - <em>Bolin Fan (Astro)</em></p>
                    <p>15:32 - 15:39 - Exploring Change-point Models and Functional Data Analysis: A Bayesian Perspective - <em>Ana Carolina da Cruz (Stats)</em></p>
                    <p>15:39 - 15:46 - Making Mock Maps for the Line Intensity Mapping Experiments - <em>Doğa Tolgay (CITA)</em></p>
                    <p>15:46 - 16:00 - Break</p>
                </div>
                <div className="card text-card">
                    <h2 className="h2-title">Wrapping Up (16:00 - 17:00)</h2>
                    <p>16:00 - 16:20 - Satellite data and machine learning to assess environmental exposures for health studies - <em>Meredith Franklin (Stats)</em></p>
                    <p>16:20 - 16:40 - Calibrated predictive distributions for photometric redshifts - <em>Biprateep Dey (Astro @ Pitt → Stats @ UofT)</em></p>
                    <p>16:40 - 16:45 - Closing remarks - <em>Antonio Herrera Martin/Kevin McKinnon (Stats/Astro)</em></p>
                    <p>16:45 - 17:00 - Break + Workshop Wrap-Up</p>
                </div>
            </section>
        </div>
    );
}

export default Schedule;