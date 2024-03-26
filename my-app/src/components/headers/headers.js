import {React, useState} from 'react';
import Content from '../content/content';
import '../headers/headers.css';


const Headers = () => {

   let [currentSection, setCurrentSection] = useState("Projects")

      return(
      <div id='headersSection'>
      <div className='headers'>
         <a href='#Projects' onClick={(e) => setCurrentSection("Projects")}><span className='headerTitle'>Projects</span></a>
         <a href='#Skills' onClick={(e) => setCurrentSection("Skills")}><span className='headerTitle'>Skills</span></a>
         <a href='#Experience' onClick={(e) => setCurrentSection("Experience")}><span className='headerTitle'>Experience</span></a>
         <a href='#Contact' onClick={(e) => setCurrentSection("Contact")}><span className='headerTitle'>Contact</span></a>
      </div>
      <div id='contentSection' className='box'>
         <Content section={{currentSection}}/>
      </div>
      </div>
      )


}



export default Headers;
