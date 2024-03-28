import React from "react";
import CompanyLogo from "../image/companyLogo.png";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div className="experienceWrapper">
      <p id="contentTitle">Experience</p>


      <div className="companyContainer">
      <img src={CompanyLogo} className="companyLogo" /> 
      <p className="companyText">Company 1</p>
      <p className="experienceText">Jan 2000 - Feb 2007</p>
      </div>
            <div id="divider"></div>


      <div className="companyContainer">
      <img src={CompanyLogo} className="companyLogo" /> 
      <p className="companyText">Company 1</p>
      <p className="experienceText">Jan 2000 - Feb 2007</p>
      </div>


      <div className="companyContainer">
      <img src={CompanyLogo} className="companyLogo" /> 
      <p className="companyText">Company 1</p>
      <p className="experienceText">Jan 2000 - Feb 2007</p>
      </div>
    </div>
  );
};

export default Experience;
