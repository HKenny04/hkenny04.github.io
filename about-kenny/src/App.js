import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About id="about" />
        <Skills id="skills" />
        <Contacts id="contacts" />
      </div>
    );
  }
}

export default App;