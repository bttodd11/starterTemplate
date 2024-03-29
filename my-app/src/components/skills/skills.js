import React from 'react';
import "../skills/skills.css"


const Skills = () => {
   return (

         <div className='skillWrapper'>
            <p id="contentTitle">Skills</p>
            <p className='skillsLabel'>Front-End : <span className='skillsText' >React, Angular, Vue, Bootstrap, Sass, </span></p>
            <p className='skillsLabel'>Back-End : <span className='skillsText' >Java, Python, Spring, Springboot, C#, Kotlin, Node.js</span></p>
            <p className='skillsLabel'>Database : <span className='skillsText' >MySQL, MongoDB, Redis, PostgreSQL</span></p>
            <p className='skillsLabel'>Other : <span className='skillsText' >Google Cloud, Amazon Web Services, Big Query, Compute Engine</span></p>
            </div>

   )
}

export default Skills;
