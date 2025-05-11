import React from "react";
import "../Styles/PortfolioPage.css";
import PortfolioImg from "../Assets/Portfolio.png"


const projects = [
  {
    title: "To-Do list Website",
    description: " A simple and user-friendly To-Do List web application that helps users organize tasks, set priorities, and manage their daily activities efficiently.",
    image: "https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase web development skills and projects.",
    image: PortfolioImg
  },
  {
    title: " Employee Management System",
    description: " A desktop Employee Management System designed to streamline employee data handling, including records management, attendance tracking, and payroll processing.",
    image: "https://snacknation.com/wp-content/uploads/2022/12/Employee-Management-Software-e1670371925164.png"
  },
  {
    title: " Employee Login and Registration System",
    description: " A secure web application that allows employees to register, log in, and manage their profiles, ensuring efficient user authentication and data access control.",
    image: "https://www.opensourceposguide.com/sites/default/files/employees-new/employee-login.jpg"
  }
];

function Portfolio  () {
  return (
    <section id="PortfolioPage">
      <div className="portfolio-header">
        <h2>My <span className="highlight">Projects</span></h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="flip-card-back">
              <img src={project.image} alt={project.title} />
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;