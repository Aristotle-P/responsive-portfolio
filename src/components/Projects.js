import React, { Component } from 'react';
import '../style/Projects.css';

export class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <h4 className="projects-heading">Projects</h4>
        <div className="projects-container">
          <div className="desktop-project-container">
            <a
              href="https://react-client-panel-9622b.firebaseapp.com/"
              className="project-link"
            >
              <div className="project-card project-one-card">
                <p className="project-info">React/Redux Client Panel</p>
              </div>
            </a>
            <h4 className="desktop-project-headline">
              Interactive React Client Panel
            </h4>
            <a
              href="https://github.com/Aristotle-P/react-client-panel"
              className="source"
            >
              Source
            </a>
            <p className="desktop-project-info">
              React application with Redux store and Firebase back-end. Styled
              with Bootstrap
            </p>
          </div>
          <div className="desktop-project-container">
            <a
              href="https://aristotle-p.github.io/react-contact-manager/#/"
              className="project-link"
            >
              <div className="project-card project-two-card">
                <p className="project-info">React/Redux Contact Manager</p>
              </div>
            </a>
            <h4 className="desktop-project-headline">React Contact Manager</h4>
            <a
              href="https://github.com/Aristotle-P/react-redux-contact-manager"
              className="source"
            >
              Source
            </a>
            <p className="desktop-project-info">
              React application with Redux store. Styled with Bootstrap
            </p>
          </div>
          <div className="desktop-project-container">
            <a
              href="https://aqueous-earth-43524.herokuapp.com/"
              className="project-link"
            >
              <div className="project-card project-three-card">
                <p className="project-info">
                  Ruby on Rails Micro-Blogging Application
                </p>
              </div>
            </a>
            <h4 className="desktop-project-headline">
              Ruby on Rails Micro-Blogger
            </h4>
            <a
              href="https://github.com/Aristotle-P/Micro-App"
              className="source"
            >
              Source
            </a>
            <p className="desktop-project-info">
              Ruby on Rails micro-blogging application with PostgreSQL database
              and mailer through SendGrid
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
