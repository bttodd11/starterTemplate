import {React, useState, useEffect} from 'react';
import Content from '../content/content';
import '../headers/headers.css';


const Headers = () => {

   // Starting off with Project section being created. 
   let [currentSection, setCurrentSection] = useState("Projects")

   
   useEffect(() => {
      // This is to restart the color of the headers to their original color, then we will
      // highlight the header name that has been selected.
      document.getElementById("Projects").style.color = "#E2D7D7";
      document.getElementById("Skills").style.color = "#E2D7D7";
      document.getElementById("Experience").style.color = "#E2D7D7";
      document.getElementById("Contact").style.color = "#E2D7D7";

      document.getElementById(currentSection).style.color = "#284A3F";

      
      

   }, [currentSection])
      return(
      <div id='headersSection'>
         <a href='#Projects' onClick={(e) => setCurrentSection("Projects")}><span id='Projects' className='headerTitle'>Projects</span></a>
         <a href='#Skills' onClick={(e) => setCurrentSection("Skills")}><span id='Skills' className='headerTitle'>Skills</span></a>
         <a href='#Experience' onClick={(e) => setCurrentSection("Experience")}><span id='Experience' className='headerTitle'>Experience</span></a>
         <a href='#Contact' onClick={(e) => setCurrentSection("Contact")}><span id='Contact' className='headerTitle'>Contact</span></a>
      <div id='contentSection' className='box'>
         <Content section={{currentSection}}/>
      </div>
      </div>
      )


}



export default Headers;
