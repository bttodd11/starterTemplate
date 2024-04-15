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
      animate={{
        scale: [.2, .8, .5, .3, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        opacity: [.6, .4, .2,.7,1]
      }}
       transition={{
        duration: 2,
        ease: "easeIn",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "mirror"
      }}
  

         >
         <img src={ImagePlaceHolder} className='portfolioImage box' alt='Portfolio' /></motion.div>
         < Headers />
      </div>
   )
   };


export default Main;
