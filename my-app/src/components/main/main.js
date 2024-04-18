import React from 'react';
import ImagePlaceHolder from '../image/imagePlaceHolder.jpeg'
import Headers from '../headers/headers';
import { motion } from "framer-motion"
import "./main.css";

const Main = () => {

   return(
      <div id="mainSection">
         <p className='mainTitle'>FirstName.LastName</p>
         <span className='cityTitle'>City,</span><span className='stateTitle'>State</span>
         <motion.div       
        initial={{
         x: 0,
       }}
       animate={{
         x: [100,-100]
       }}
      transition={{
         type: 'tween',
         ease: 'easeInOut',
         repeat: Infinity,
         repeatType: 'reverse',
         repeatDelay: 1,
         duration: 2,
       }}
  >
         <img src={ImagePlaceHolder} className='portfolioImage box' alt='Portfolio' /></motion.div>
         < Headers />
      </div>
   )
   };


export default Main;
