import React from "react";
import "../experience/experience.css";

const Experience = () => {
  return (
    <div id="experienceWrapper">
      <div className="companyContainer">
        <div className="imageContainer">
          <img className="companyLogo companyLogoBox" alt="Company Logo 1" />
        </div>
        <p className="companyText">Company 1</p>
        <p className="experienceDates">January 2000 - February 2007</p>
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
      <div id="divider" className="expDivider"></div>
      <div className="companyContainer">
        <img className="companyLogo companyLogoBox" alt="Company Logo 2" />
        <p className="companyText">Company 2</p>
        <p className="experienceDates">February 2007 - August 2016</p>
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
      <div id="divider" className="expDivider"></div>
      <div className="companyContainer">
        <img className="companyLogo companyLogoBox" alt="Company Logo 3" />
        <p className="companyText">Company 3</p>
        <p className="experienceDates">August 2016 - Present</p>
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
