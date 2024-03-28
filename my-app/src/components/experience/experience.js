import React from "react";
import CompanyLogo from "../image/companyLogo.png";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div className="experienceWrapper">
      <p id="contentTitle">Experience</p>

      <div className="companyContainer">
        <div className="imageContainer">
        <img src={CompanyLogo} className="companyLogo" />
        </div>
        <p className="companyText">Company 1</p>
        <p className="experienceText">January 2000 - February 2007</p>
        <p className="experienceText">Title</p>
      </div>
      <div id="divider"></div>

      <div className="companyContainer">
        <img src={CompanyLogo} className="companyLogo" />
        <p className="companyText">Company 2</p>
        <p className="experienceText">February 2007 - August 2016</p>
        <p className="experienceText">Title</p>

      </div>

      <div id="divider"></div>
      <div className="companyContainer">
        <img src={CompanyLogo} className="companyLogo" />
        <p className="companyText">Company 3</p>
        <p className="experienceText">August 2016 - Present</p>
        <p className="experienceText">Title</p>
      </div>
    </div>
  );
};

export default Experience;
