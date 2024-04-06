import React from "react";
// import CompanyLogo from "../image/companyLogo.png";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div className="experienceWrapper">
      <p id="contentTitle">Experience</p>
      <div className="companyContainer">
        <div className="imageContainer">
          <img className="companyLogo box" alt="Company Logo 1" />
        </div>
        <p className="companyText">Company 1</p>
        <p className="experienceText">January 2000 - February 2007</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pellentesque enim, sit amet pharetra libero. Praesent volutpat ipsum
          est, at pellentesque turpis molestie pulvinar. In auctor, dui ac
          placerat dapibus, metus mauris maximus massa, congue pellentesque
          ligula nisl at diam. Ut pulvinar turpis ipsum, vel condimentum enim
          bibendum vitae.
        </p>
      </div>
      <div id="divider" className="exp"></div>
      <div className="companyContainer">
        <img className="companyLogo box" alt="Company Logo 2" />
        <p className="companyText">Company 2</p>
        <p className="experienceText">February 2007 - August 2016</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pellentesque enim, sit amet pharetra libero. Praesent volutpat ipsum
          est, at pellentesque turpis molestie pulvinar. In auctor, dui ac
          placerat dapibus, metus mauris maximus massa, congue pellentesque
          ligula nisl at diam. Ut pulvinar turpis ipsum, vel condimentum enim
          bibendum vitae.
        </p>
      </div>
      <div id="divider" className="exp"></div>
      <div className="companyContainer">
        <img className="companyLogo box" alt="Company Logo 3" />
        <p className="companyText">Company 3</p>
        <p className="experienceText">August 2016 - Present</p>
        <p className="experienceTitle">Job Title</p>
        <p className="experienceDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          pellentesque enim, sit amet pharetra libero. Praesent volutpat ipsum
          est, at pellentesque turpis molestie pulvinar. In auctor, dui ac
          placerat dapibus, metus mauris maximus massa, congue pellentesque
          ligula nisl at diam. Ut pulvinar turpis ipsum, vel condimentum enim
          bibendum vitae.
        </p>
      </div>
    </div>
  );
};

export default Experience;
