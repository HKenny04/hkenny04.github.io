import React, { Component } from 'react';
import profile from '../images/linkedin.jpg';

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
            <h5>Applied Mathematics and Statistics, B.S.</h5>
          </div>
        </div>
    );
  };
}

export default About;