import React from 'react';
import "./hero.css";

const Hero = () => {

   return(
      <div id="heroSection">
         <p className='heroTitle'>FirstName.LastName</p>
         <span className='cityTitle'>City,</span><span className='stateTitle'>State</span>
         <img src='' className='portfolioImage' /> 
      </div>
   )
   };


export default Hero;
