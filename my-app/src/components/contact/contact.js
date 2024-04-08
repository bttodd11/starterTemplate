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
              <p className="contactTitle">Wanna Collab ?</p>
              <p className="contactText">
                Wanna work together ? Feel free to reach out and I will get back
                with you as soon as possible.
              </p>
            </div>
            <div className="col-sm-12 col-md-3 socialSection">
              <p className="contactTitle">Social Media</p>
              <span>
                <img src={Github} className="socialIcons" alt="Githunb Icon" />
              </span>
              <span>
                <img
                  src={Instagram}
                  className="socialIcons"
                  alt="Instagram Icon"
                />
              </span>
              <span>
                <img src={LinkedIn} className="socialIcons" alt="LinkedIn" />
              </span>
              <span>
                <img src={Medium} className="socialIcons" alt="Medium" />
              </span>
              <span>
                <img src={Twitter} className="socialIcons" alt="Twitter" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
