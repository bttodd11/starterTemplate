import { React, useState, useEffect } from 'react';
import Content from '../content/content';
import { motion } from "framer-motion"
import '../headers/headers.css';


const Headers = () => {

   // Starting off with Project section being created. 
   let [currentSection, setCurrentSection] = useState("Projects")


   useEffect(() => {
      // This is to restart the color of the headers to their original color, then we will
      // highlight the header name that has been selected.
      document.getElementById("Projects").style.color = "#768692";
      document.getElementById("Skills").style.color = "#768692";
      document.getElementById("Experience").style.color = "#768692";
      document.getElementById("Contact").style.color = "#768692";
      document.getElementById("Projects").style.textShadow = "none";
      document.getElementById("Skills").style.textShadow = "none";
      document.getElementById("Experience").style.textShadow = "none";
      document.getElementById("Contact").style.textShadow = "none";
      document.getElementById("Projects").style.opacity = ".4";
      document.getElementById("Skills").style.opacity = ".4";
      document.getElementById("Experience").style.opacity = ".4";
      document.getElementById("Contact").style.opacity = ".4";


      document.getElementById(currentSection).style.color = "white";
      document.getElementById(currentSection).style.textShadow = "#768692 1px 0 10px"
      document.getElementById(currentSection).style.opacity = "1";

   }, [currentSection])
   return (
      <div id='headersSection'>
         <a href='#Projects' onClick={(e) => setCurrentSection("Projects")}><span id='Projects' className='headerTitle'>Projects</span></a>
         <a href='#Skills' onClick={(e) => setCurrentSection("Skills")}><span id='Skills' className='headerTitle'>Skills</span></a>
         <a href='#Experience' onClick={(e) => setCurrentSection("Experience")}><span id='Experience' className='headerTitle'>Experience</span></a>
         <a href='#Contact' onClick={(e) => setCurrentSection("Contact")}><span id='Contact' className='headerTitle'>Contact</span></a>
         <div id='contentSection' className='box'>
            <Content section={{ currentSection }} />
         </div>
      </div>
   )


}



export default Headers;
