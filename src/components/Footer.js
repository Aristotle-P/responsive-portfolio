import React, { Component } from 'react';
import '../style/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h4 className="contact-heading">Contact Me</h4>
        <p className="contact-info">Phone: 904-994-4454</p>
        <p className="contact-info">Email: aristotlepoultney@gmail.com</p>
        <div className="desktop-contact-container">
          <h4 className="desktop-contact-heading">Get in touch today!</h4>
          <a
            href="mailto:aristotlepoultney@gmail.com"
            className="desktop-contact-button"
          >
            SEND EMAIL
          </a>
          <p className="desktop-contact-info">aristotlepoultney@gmail.com</p>
        </div>
        <div className="contact-link-container">
          <a
            href="https://github.com/Aristotle-P"
            className="desktop-contact-links"
          >
            <i className="fab fa-github" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aristotle-poultney-195026176/"
            className="desktop-contact-links"
          >
            <i className="fab fa-linkedin-in" />
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
