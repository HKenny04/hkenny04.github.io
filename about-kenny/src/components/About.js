import React, { Component } from 'react';
import profile from '../images/linkedin.jpg';

class About extends Component {
  render() {
    return (
        <div id="about">
          <div className="split left">
            <div className="intro">
              Hey there, my name is Kenny Hu. I'm an undergraduate student studying Computer Science and Applied Mathematics at Stony Brook University.<br/>
              During my free time I like to workout, watch TV, look at memes, play games, and do some coding.
            </div>
          </div>
          <div className="split right">
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