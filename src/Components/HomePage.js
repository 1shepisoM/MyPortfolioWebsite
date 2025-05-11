import React from "react";
import "../Styles/HomePage.css";
import Myself from "../Assets/TshepisoM.jpg"
import GithubLogo from "../Assets/Github_Logo.svg"
import LinkedinLogo from "../Assets/Linkedin_Logo.svg"
import TshepisoMarutlulle_CV from "../Assets/TshepisoMarutlulle_CV.pdf"



function HomePage() {
  return (
    <div id="HomePage">
       <header className="navbar">

    
        <nav>
          <ul>
            <li><a href="#HomePage">Home</a></li>
            <li><a href="#AboutPage">About</a></li>
            <li><a href="#SkillsPage">Skills</a></li>
            <li><a href="#PortfolioPage">Portfolio</a></li>
            <li><a href="#ContactPage">Contact</a></li>
          </ul>
        </nav>
      </header>

      

      <main className="main-grid">
        <div className="text-section">
          <h1>Tshepiso Marutlulle</h1>
          <h2>
           <span className="highlight">SOFTWARE DEVELOPER</span>
          </h2>
          <p className=" Description" >
          Motivated and detail-oriented IT Software Developer with a strong foundation in software
 testing, web development, and programming. Committed to continuous learning and
 professional growth, with a passion for building reliable, user-focused applications.
 Proficient in identifying and resolving technical issues, improving code quality, and
 contributing to collaborative development projects. Eager to join a dynamic team where I
 can expand my skills, take on new challenges, and contribute to meaningful software
 solutions.
         
        <p>
          <button className="download-cv">   

          <a className=" buttonname" href={TshepisoMarutlulle_CV} download="TshepisoMarutlulleCV" >Download CV </a>
         
          </button>
          </p>
         
         <a  href ="https://github.com/1shepisoM"> <img src= {GithubLogo} alt="Github" 
        className = " Logos"  /></a>

         <a  href="https://www.linkedin.com/in/tshepiso-marutlulle-776687290/"> <img src= {LinkedinLogo} alt="Github" 
        className = " Logos"  /></a>
         
         </p>
         

        </div>

        <div className="image-section">
          <img
            src= {Myself}
            alt="Tshepiso Marutlulle"
            className="profile-image"
          />
        </div>
      </main>
    </div>
  );
}
export default HomePage;