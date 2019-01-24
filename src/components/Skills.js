import React, { Component } from 'react';
import '../style/Skills.css';

export class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <h4 className="skills-heading">Skills</h4>
        <div className="skills-container">
          <div className="list-container">
            <h6 className="list-heading">Front-End</h6>
            <ul className="skill-list">
              <li>React</li>
              <li>Redux</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="list-container">
            <h6 className="list-heading">Back-End</h6>
            <ul className="skill-list">
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="list-container">
            <h6 className="list-heading">Other</h6>
            <ul className="skill-list">
              <li>Git/Version Control</li>
              <li>GitHub/Bitbucket</li>
              <li>RESTful Conventions</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
