import React from "react";
import ImagePlaceHolder from "../image/imagePlaceHolder.jpeg";
import "../projects/projects.css";

const Projects = () => {
  return (
    <div>
      <div id="projectWrapper">
        <div class="container-fluid text-center">
          <div class="projectSectionContainer row">
            <div class="col-sm-12 col-md-12 individualProjectPod">
              <p className="projectTitle">Title of Project</p>
              <img
                src={ImagePlaceHolder}
                className="projectPlaceHolder imageBox"
                alt="Project 1"
              />
              <p className="projectSubTitle">Tech : </p>
              <span className="projectText"> Angular, MongoDB, AWS</span>
              <br />
              <p className="projectSubTitle">Summary : </p>
              <span className="projectText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                feugiat erat a consequat dictum. Morbi non quam lobortis,
                aliquet dolor non, facilisis sem. Mauris molestie neque sit amet
                viverra porttitor. Nullam sodales hendrerit purus, et fringilla
                purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod
                enim sit amet sem fringilla.
              </span>
            </div>
            <div id="divider"></div>
            <div class="col-sm-12 col-md-12 individualProjectPod">
              <p className="projectTitle">Title of Project</p>
              <img
                src={ImagePlaceHolder}
                className="projectPlaceHolder imageBox"
                alt="Project 2"
              />
              <p className="projectSubTitle">Tech : </p>
              <span className="projectText"> React, SQL, Google Cloud</span>
              <br />
              <p className="projectSubTitle">Summary : </p>
              <span className="projectText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                feugiat erat a consequat dictum. Morbi non quam lobortis,
                aliquet dolor non, facilisis sem. Mauris molestie neque sit amet
                viverra porttitor. Nullam sodales hendrerit purus, et fringilla
                purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod
                enim sit amet sem fringilla.
              </span>
            </div>
            <div id="divider"></div>
            <div class="col-sm-12 col-md-12 individualProjectPod">
              <p className="projectTitle">Title of Project</p>
              <img
                src={ImagePlaceHolder}
                className="projectPlaceHolder imageBox"
                alt="Project 3"
              />
              <p className="projectSubTitle">Tech : </p>
              <span className="projectText"> Vue, MongoDB, AWS</span>
              <br />
              <p className="projectSubTitle">Summary : </p>
              <span className="projectText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                feugiat erat a consequat dictum. Morbi non quam lobortis,
                aliquet dolor non, facilisis sem. Mauris molestie neque sit amet
                viverra porttitor. Nullam sodales hendrerit purus, et fringilla
                purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod
                enim sit amet sem fringilla.
              </span>
            </div>
            <div id="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
