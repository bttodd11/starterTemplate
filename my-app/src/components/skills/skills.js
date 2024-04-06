import React from "react";
import Angular from "../image/angular.png";
import ReactLogo from "../image/react.png";
import Java from "../image/java.png";
import MySQL from "../image/mysql.png";
import Python from "../image/python.png";
import Redis from "../image/redis.png";
import "../skills/skills.css";

const Skills = () => {
  return (
    <div className="skillWrapper">
      <p id="contentTitle">Skills</p>
      <div className="skills">
      <div className="col-12 skillBox">
        <p className="skillsLabel">
          Front-End :{" "}
          </p>
          <span className="skillsText">
            React, Angular, Vue, Bootstrap, Sass,{" "}
          </span>
    </div>
    <div className="col-12 skillBox">
    <div className="col-12">
        <p className="skillsLabel">
          Back-End :{" "}
          </p>
          <span className="skillsText">
            Java, Python, Spring, Springboot, C#, Kotlin, Node.js
          </span>
          </div>
          </div>
          <div className="col-12 skillBox">
          <div className="col-12">
        <p className="skillsLabel">
          Database :{" "}
          </p>
          <span className="skillsText">MySQL, MongoDB, Redis, PostgreSQL</span>
          </div>
          </div>
          <div className="col-12 skillBox">
          <div className="col-12">
        <p className="skillsLabel">
          Other :{" "}
          </p>
          <span className="skillsText">
            Google Cloud, Amazon Web Services, Big Query, Compute Engine
          </span>
          </div>
          </div>
      </div>
      <div className="logos">
        <div className="row justify-content-end">
          <div className="col-12">
            <span>
              <img src={Angular} className="skillsIcons" alt="Angular Icon"/>
            </span>
            <span>
              <img src={ReactLogo} className="skillsIcons" alt="React Icon" />
            </span>
          </div>
          <div className="col-12">
            <span>
              <img src={Java} className="skillsIcons" alt="Java Icon" />
            </span>
            <span>
              <img src={Python} className="skillsIcons" alt="Python Icon"/>
            </span>
          </div>
          <div className="col-12">
            <span>
              <img src={Redis} className="skillsIcons" alt="Redis Icon" />
            </span>
            <span>
              <img src={MySQL} className="skillsIcons" alt="MySQL Icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
