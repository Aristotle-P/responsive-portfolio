import React, { Component } from 'react';
import './style/App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
