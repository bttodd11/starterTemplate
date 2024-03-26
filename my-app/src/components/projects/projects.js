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
            <div class="col project">
               <p>Title of Project</p>
               <img src={ImagePlaceHolder} className='projectPlaceHolder' /> 
               <p className="projectSubTitle">Description : </p><span className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat erat a consequat dictum. Morbi non quam lobortis, aliquet dolor non, facilisis sem. Mauris molestie neque sit amet viverra porttitor. Nullam sodales hendrerit purus, et fringilla purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod enim sit amet sem fringilla.</span>
            </div>
            <div id="divider"></div>
            <div class="col project">
            <p>Title of Project</p>
               <img src={ImagePlaceHolder} className='projectPlaceHolder' /> 
               <p className="projectSubTitle">Description : </p><span className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat erat a consequat dictum. Morbi non quam lobortis, aliquet dolor non, facilisis sem. Mauris molestie neque sit amet viverra porttitor. Nullam sodales hendrerit purus, et fringilla purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod enim sit amet sem fringilla.</span>
            </div>
            <div id="divider"></div>
            <div class="col project">
            <p>Title of Project</p>
               <img src={ImagePlaceHolder} className='projectPlaceHolder' /> 
               <p className="projectSubTitle">Description : </p><span className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat erat a consequat dictum. Morbi non quam lobortis, aliquet dolor non, facilisis sem. Mauris molestie neque sit amet viverra porttitor. Nullam sodales hendrerit purus, et fringilla purus gravida quis. Vestibulum ac aliquam quam. Mauris euismod enim sit amet sem fringilla.</span>
            </div>
            <div id="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
