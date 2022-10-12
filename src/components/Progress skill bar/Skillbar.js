import React from "react";
import "./style.css";

function SkillsBar() {
  return (
    <div className="container">
      <h1 className="title-text">My Skills</h1>

      <div className="skill-box">
        <span className="title text-white fs-4" id="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title text-white  fs-4" id="title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title text-white  fs-4" id="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title text-white  fs-4" id="title">NodeJS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title text-white  fs-4" id="title">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title text-white  fs-4" id="title">ExpressJS</span>
        <div className="skill-bar">
          <span className="skill-per expressjs">
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
