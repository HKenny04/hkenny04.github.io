import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Resume from '../documents/kenny_hu_resume.pdf';

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="skills_header">Professional Skills</div><br/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <ProgressBar className="header_progress">
              <ProgressBar variant="danger" now={25} label={"Beginner"} key={1} />
              <ProgressBar variant="warning" now={25} label={"Intermediate"} key={2} />
              <ProgressBar variant="info" now={25} label={"Advanced"} key={3} />
              <ProgressBar variant="success" now={25} label={"Expert"} key={4} />
            </ProgressBar>
          </div>
        </div><br/>

        <div className="header">Programming Languages</div>
        <div className="row">
          <div className="col-md-3">Java</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="success" now={85} key={5} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">JavaScript</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="success" now={85} key={6} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">HTML/CSS</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="success" now={80} key={7} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">Python</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="info" now={74} key={8} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">C</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="warning" now={45} key={9} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">MIPS Assembly</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="warning" now={49} key={10} />
          </div>
        </div>

        <br/>
        <div className="header">Libraries/Frameworks</div>
        <div className="row">
          <div className="col-md-3">React</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="info" now={74} key={11} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">Redux</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="info" now={70} key={12} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">Bootstrap</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="info" now={70} key={13} />
          </div>
        </div>

        <br/>
        <div className="header">Languages</div>
        <div className="row">
          <div className="col-md-3">Cantonese</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="success" now={100} key={14} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">Mandarin</div>
          <div className="col-md-9">
            <ProgressBar className="progress_bar" variant="success" now={100} key={15} />
          </div>
        </div>

        <br/>
        <div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <Button variant="outline-success">My Resume</Button>
          </a>
        </div>
      </div>
    );
  };
}

export default Skills;