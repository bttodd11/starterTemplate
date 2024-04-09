import React from 'react';
import ImagePlaceHolder from '../image/imagePlaceHolder.jpeg'
import Headers from '../headers/headers';
import "./main.css";

const Main = () => {

   return(
      <div id="mainSection">
         <p className='mainTitle'>FirstName.LastName</p>
         <span className='cityTitle'>City,</span><span className='stateTitle'>State</span>
         <img src={ImagePlaceHolder} className='portfolioImage box' alt='Portfolio' /> 
         < Headers />
      </div>
   )
   };


export default Main;
