import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

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