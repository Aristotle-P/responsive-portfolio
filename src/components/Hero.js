import React, { Component } from 'react';
import '../style/Hero.css';

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1 className="hero-title">{'//Aristotle Poultney'}</h1>
        <h5 className="hero-subtitle">Web Developer//Front-End Engineer</h5>
      </section>
    );
  }
}

export default Hero;
