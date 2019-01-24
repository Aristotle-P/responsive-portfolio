import React, { Component } from 'react';
import '../style/Navbar.css';

export class Navbar extends Component {
  state = {
    skills: '.skills',
    projects: '.projects',
    footer: '.footer'
  };

  onClick = e => {
    document.querySelector(e).scrollIntoView({
      behavior: 'smooth'
    });
    this.skillsRef.current.blur();
    this.projectsRef.current.blur();
    this.contactRef.current.blur();
  };

  render() {
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
    const { skills, projects, footer } = this.state;
    return (
      <header className="navbar">
        <button
          className="nav-links"
          onClick={this.onClick.bind(this, skills)}
          ref={this.skillsRef}
        >
          Skills
        </button>
        <button
          className="nav-links"
          onClick={this.onClick.bind(this, projects)}
          ref={this.projectsRef}
        >
          Project
        </button>
        <button
          className="nav-links"
          onClick={this.onClick.bind(this, footer)}
          ref={this.contactRef}
        >
          Contact
        </button>
      </header>
    );
  }
}

export default Navbar;
