import React, { Component } from 'react';
import profile from '../images/linkedin.jpg';
import Facebook from '../images/fbicon.png';
import GitHub from '../images/githubicon.png';
import Instagram from '../images/igicon.png';
import LinkedIn from '../images/linkedinicon.png';

class About extends Component {
  render() {
    return (
        <div id="about">
          <div className="left">
            <div className="intro">
              Hey there, my name is Kenny Hu. I'm an undergraduate student studying Computer Science and Applied Mathematics at Stony Brook University.<br/><br/>
              My main interests include software development, artificial intelligence, and cybersecurity.<br/><br/>
              During my free time I like to workout, hang out with friends, play games, and code.
            </div>
          </div>
          <div className="right">
            <img alt={"profile"} src={profile} /><br/><br/>
            <h2>Kenny Hu</h2>
            <h4>Junior at Stony Brook University</h4>
            <h5>Computer Science, B.S.</h5>
            <h5>Applied Mathematics and Statistics, B.S.</h5><br/><br/>
            <h4>Contact Me</h4>
            <h5>kenny.hu.kh@gmail.com</h5>
            <a href={"https://www.facebook.com/hk0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"fb"} src={Facebook} />
            </a>
            <a href={"https://www.instagram.com/hk_0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"ig"} src={Instagram} />
            </a>
            <a href={"https://www.linkedin.com/in/kenny-hu-91b97116a"} target="_blank" rel="noopener noreferrer">
              <img alt={"li"} src={LinkedIn} />
            </a>
            <a href={"https://github.com/hk0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"gh"} src={GitHub} />
            </a>
          </div>
        </div>
    );
  };
}

export default About;