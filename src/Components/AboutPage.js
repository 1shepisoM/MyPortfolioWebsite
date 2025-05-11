import React from 'react';
import '../Styles/AboutPage.css';
import Myself from "../Assets/AboutME.jpg";

function AboutMe() {
  return (
    <div id="AboutPage">
      <h2 className="about-title">About <span className="highlight">Me</span></h2>
      <div className="about-grid">
        <div className="about-image-card">
          <img src={Myself} alt="Tshepiso Marutlulle" className="profile-image" />
          <div className="about-info-card">
            <h3>Tshepiso Marutlulle</h3>
            <p>SOFTWARE DEVELOPER</p>
           
           
          </div>
        </div>
        <div className="about-description">
          <h3 className='h3'>  Who is Tshepiso?</h3> 
          <p>
          Hi! I’m a football enthusiast with a strong passion for gaming and all things tech.
           I dream of building a career in coding, especially in web development,
           and anything related to IT feels truly special to me.
            I’m a friendly and easy-going person who enjoys communicating and connecting with others.
           Whether I’m talking tech, playing games,
            or watching the latest match, I always bring a positive attitude and a love for what I do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
