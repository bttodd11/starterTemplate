import { React, useState, useEffect } from 'react';
import Content from '../content/content';
import '../headers/headers.css';


const Headers = () => {

   // Starting off with Project section being created. 
   let [currentSection, setCurrentSection] = useState("Projects")

   let changeStylesHeadersBack = () => {
      
      let projectId = document.getElementById("Projects");
      let skillsId = document.getElementById("Skills")
      let experienceId = document.getElementById("Experience")
      let contactId = document.getElementById("Contact")

      projectId.style.color = "#768692";
      skillsId.style.color = "#768692";
      experienceId.style.color = "#768692";
      contactId.style.color = "#768692";
      projectId.style.textShadow = "none";
      skillsId.style.textShadow = "none";
      experienceId.style.textShadow = "none";
      contactId.style.textShadow = "none";
      projectId.style.opacity = ".4";
      skillsId.style.opacity = ".4";
      experienceId.style.opacity = ".4";
      contactId.style.opacity = ".4";
      projectId.style.fontFamily = "Rubik Doodle Shadow,system-ui";
      skillsId.style.fontFamily = "Rubik Doodle Shadow,system-ui";
      experienceId.style.fontFamily = "Rubik Doodle Shadow,system-ui";
      contactId.style.fontFamily = "Rubik Doodle Shadow,system-ui";
   }

   let changeStylesCurrentSelection = (currentSection) => {
      let currentSectionId = document.getElementById(currentSection);

      currentSectionId.style.color = "#284A3F";
      currentSectionId.style.fontFamily = "Inknut Antiqua,serif";
      currentSectionId.style.fontStyle = "normal";
      currentSectionId.style.fontWeight = "900";
      currentSectionId.style.opacity = "1";
   }
   useEffect(() => {
      // This is to restart the color of the headers to their original color, then we will
      // highlight the header name that has been selected.
      changeStylesHeadersBack()
      changeStylesCurrentSelection(currentSection)
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
