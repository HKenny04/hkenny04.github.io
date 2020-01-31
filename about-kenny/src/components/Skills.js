import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
        <div id="skills" className="container-fluid bg-dark clearfix py-5" /*style="text-align:center; color:white;"*/>
        <h1>Professional Skills</h1>
        <br/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="progress" /*style="height:50px;"*/>
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" /*style="font-size:20px; width:20%;"*/>Beginner</div>
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" /*style="font-size:20px; width:20%;"*/>Decent</div>
              <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" /*style="font-size:20px; width:20%;"*/>Intermediate</div>
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" /*style="font-size:20px; width:20%;"*/>Adept</div>
              <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" /*style="font-size:20px; background-color:#FF3F80; width:20%;"*/>Expert</div>
            </div>
          </div>
        </div>
        <br/>
        <h2>Programming Languages</h2>
        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">Java</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-success animate-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">JavaScript</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-primary animate-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">HTML/CSS</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-success animate-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">MIPS Assembly</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-success animate-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">Python</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-primary animate-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">OCaml</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-warning animate-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <br/>
        <h2>Libraries/Frameworks</h2>
        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">React</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-primary animate-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">Bootstrap</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-primary animate-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">jQuery</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar bg-warning animate-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <br/>
        <h2>World Languages</h2>
        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">Cantonese</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar animate-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" /*style="background-color:#FF3F80;"*/></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h3 className="progress_title">Mandarin</h3>
          </div>
          <div className="col-md-9 align-self-center">
            <div className="progress">
              <div className="progress-bar animate-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" /*style="background-color:#FF3F80;"*/></div>
            </div>
          </div>
        </div>

        <br/>
        <div><a href="../documents/kenny_hu_resume.pdf" target="_blank"><button type="button" /*class="btn btn-success btn-lg"*/>Resume</button></a></div>
      </div>
    );
  };
}

export default Skills;