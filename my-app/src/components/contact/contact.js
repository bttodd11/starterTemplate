import React from "react";
import "../contact/contact.css";
import Github from "../image/github.png";
import Instagram from "../image/instagram.png";
import LinkedIn from "../image/linkedIn.png";
import Medium from "../image/medium.png";
import Twitter from "../image/twitter.png";

const Contact = () => {
  return (
    <div>
      <div className="contactWrapper">
        <div class="container">
          <div class="row">
            <div className="col-sm-12 col-md-3 contactSection">
              <p className="contactTitle">Wanna Collab?</p>
              <p className="contactText">
                Wanna work together ? Feel free to reach out and I will get back
                with you as soon as possible.
              </p>
            </div>
            <div className="col-sm-12 col-md-3 socialSection">
              <p className="contactTitle">Social Media</p>
              <span>
                {/* Add your Github link here */}
                <a href="#"><img src={Github} className="socialIcons" alt="Githunb Icon" /> </a>
              </span>
              <span>
                {/* Add your Instagram link here */}
                <a href="#"><img
                  src={Instagram}
                  className="socialIcons"
                  alt="Instagram Icon"
                /> </a>
              </span>
              <span>
                {/* Add your LinkedIn link here */}
                <a href="#"><img src={LinkedIn} className="socialIcons" alt="LinkedIn" /></a>
              </span>
              <span>
                {/* Add your Medium link here */}
                <a href="#"><img src={Medium} className="socialIcons" alt="Medium" /> </a>
              </span>
              <span>
                {/* Add your Twitter link here */}
                <a href="#"> <img src={Twitter} className="socialIcons" alt="Twitter" /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
