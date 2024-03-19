import React from 'react';
import ImagePlaceHolder from '../image/imagePlaceHolder.jpeg'
import "./hero.css";

const Hero = () => {

   return(
      <div id="heroSection">
         <p className='heroTitle'>FirstName.LastName</p>
         <span className='cityTitle'>City,</span><span className='stateTitle'>State</span>
         <img src={ImagePlaceHolder} className='portfolioImage box' /> 
      </div>
   )
   };


export default Hero;
