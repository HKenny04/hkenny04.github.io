import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About id="about" />
        <Skills id="skills" />
      </div>
    );
  }
}

export default App;