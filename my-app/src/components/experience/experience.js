import React from "react";
// import CompanyLogo from "../image/companyLogo.png";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div className="experienceWrapper">
      <p id="contentTitle">Experience</p>
      <div className="companyContainer">
        <div className="imageContainer">
          <img className="companyLogo" alt="Company Logo 1" />
        </div>
        <p className="companyText">Company 1</p>
        <p className="experienceText">January 2000 - February 2007</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          metus ultricies, fringilla tellus sed, feugiat felis. Proin tempor dui
          ac ex consequat, eget ornare elit consectetur. Phasellus gravida
          nulla.{" "}
        </p>
      </div>
      <div id="divider" className="exp"></div>
      <div className="companyContainer">
        <img className="companyLogo" alt="Company Logo 2"/>
        <p className="companyText">Company 2</p>
        <p className="experienceText">February 2007 - August 2016</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          metus ultricies, fringilla tellus sed, feugiat felis. Proin tempor dui
          ac ex consequat, eget ornare elit consectetur. Phasellus gravida
          nulla.{" "}
        </p>
      </div>
      <div id="divider" className="exp"></div>
      <div className="companyContainer">
        <img className="companyLogo" alt="Company Logo 3"/>
        <p className="companyText">Company 3</p>
        <p className="experienceText">August 2016 - Present</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          metus ultricies, fringilla tellus sed, feugiat felis. Proin tempor dui
          ac ex consequat, eget ornare elit consectetur. Phasellus gravida
          nulla.{" "}
        </p>
      </div>
    </div>
  );
};

export default Experience;
