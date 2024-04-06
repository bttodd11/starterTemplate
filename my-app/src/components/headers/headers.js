import {React, useState, useEffect} from 'react';
import Content from '../content/content';
import '../headers/headers.css';


const Headers = () => {

   let [currentSection, setCurrentSection] = useState("Projects")

   
   useEffect(() => {
      document.getElementById("Projects").style.color = "#E2D7D7";
      document.getElementById("Skills").style.color = "#E2D7D7";
      document.getElementById("Experience").style.color = "#E2D7D7";
      document.getElementById("Contact").style.color = "#E2D7D7";

      document.getElementById(currentSection).style.color = "#284A3F";

      
      

   }, [currentSection])
      return(
      <div id='headersSection'>
      <div className='headers'>
         <a href='#Projects' onClick={(e) => setCurrentSection("Projects")}><span id='Projects' className='headerTitle'>Projects</span></a>
         <a href='#Skills' onClick={(e) => setCurrentSection("Skills")}><span id='Skills' className='headerTitle'>Skills</span></a>
         <a href='#Experience' onClick={(e) => setCurrentSection("Experience")}><span id='Experience' className='headerTitle'>Experience</span></a>
         <a href='#Contact' onClick={(e) => setCurrentSection("Contact")}><span id='Contact' className='headerTitle'>Contact</span></a>
      </div>
      <div id='contentSection' className='box'>
         <Content section={{currentSection}}/>
      </div>
      </div>
      )


}



export default Headers;
