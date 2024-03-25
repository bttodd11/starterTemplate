import React from "react";
import ImagePlaceHolder from '../image/imagePlaceHolder.jpeg'
import "../projects/projects.css";

const Projects = () => {
  return (
    <div>
      <p id="contentTitle">Projects</p>
      <div className="projectWrapper">
        <div class="container text-center">
          <div class="row">
            <div class="col">
               <p>Title of Project</p>
               <img src={ImagePlaceHolder} className='projectPlaceHolder' /> 
               <p className="projectSubTitle">Description : </p><span className="projectText">Testing</span>
            </div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
