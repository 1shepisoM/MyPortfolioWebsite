import React from 'react';
import '../Styles/SkillsPage.css';
import htmlIcon from '../Assets/html_Logo.svg';
import cssIcon from '../Assets/css_Logo.svg';
import jsIcon from '../Assets/javascript_Logo.svg';
import reactIcon from '../Assets/react_Logo.svg';
import csharpIcon from '../Assets/csharp_Logo.svg';
import pythonIcon from '../Assets/python_Logo.svg';
import javaIcon from '../Assets/java_Logo.svg';
import figmaIcon from '../Assets/figma_Logo.svg';

const leftSkills = [
    { name: 'HTML - 5',level: 'Advanced', icon: htmlIcon },
    { name: 'C#' ,level: 'Intermediate', icon: csharpIcon },
    { name: 'React'  ,level: 'Intermediate', icon: reactIcon },
    { name: 'Python' ,level: 'Basic', icon: pythonIcon },
  ];
  
  const rightSkills = [
    { name: 'CSS - 3' ,level: 'Advanced', icon: cssIcon },
    { name: 'JavaScript'  ,level: 'Intermediate', icon: jsIcon },
    { name: 'Figma' ,level: 'Advanced', icon: figmaIcon },
    { name: 'Java' ,level: 'Basic', icon: javaIcon },
  ];
  
  function Skills(){
    return (
      <div id="SkillsPage">
        <h2 className="skills-title">My <span className="highlight">Skills</span></h2>
        <div className="skills-columns">
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <div key={index} className="skill-row">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name} <p className='level'>{skill.level}</p></span>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <div key={index} className="skill-row">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name} <p className='level'>{skill.level}</p> </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
