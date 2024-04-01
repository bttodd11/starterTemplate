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
        <p className="skillsLabel">
          Front-End :{" "}
          <span className="skillsText">
            React, Angular, Vue, Bootstrap, Sass,{" "}
          </span>
        </p>
        <p className="skillsLabel">
          Back-End :{" "}
          <span className="skillsText">
            Java, Python, Spring, Springboot, C#, Kotlin, Node.js
          </span>
        </p>
        <p className="skillsLabel">
          Database :{" "}
          <span className="skillsText">MySQL, MongoDB, Redis, PostgreSQL</span>
        </p>
        <p className="skillsLabel">
          Other :{" "}
          <span className="skillsText">
            Google Cloud, Amazon Web Services, Big Query, Compute Engine
          </span>
        </p>
      </div>
      <div className="logos">
        <div className="row justify-content-end">
          <div className="col-12">
            <span>
              <img src={Angular} className="skillsIcons" />
            </span>
            <span>
              <img src={ReactLogo} className="skillsIcons" />
            </span>
          </div>
          <div className="col-12">
            <span>
              <img src={Java} className="skillsIcons" />
            </span>
            <span>
              <img src={Python} className="skillsIcons" />
            </span>
          </div>
          <div className="col-12">
            <span>
              <img src={Redis} className="skillsIcons" />
            </span>
            <span>
              <img src={MySQL} className="skillsIcons" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
