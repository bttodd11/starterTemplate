import {React, useState} from 'react';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import Contact from '../contact/contact';
import "../content/content.css"

const Content = (section) => {

   let currentSection = section.section.currentSection

      switch (currentSection) {
         case "Projects":
               return <Projects />
         case "Skills":
            return <Skills />
         case "Experience":
            return <Experience />
         case "Contact":
            return <Contact />
      }
}


export default Content;
