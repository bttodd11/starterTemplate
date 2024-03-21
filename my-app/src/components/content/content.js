import {React, useState} from 'react';
import "../content/content.css"

const Content = () => {

   let [currentContent, setCurrentContent] = useState("")
   // We need to have a on click method that determines which component to render
console.log(1)
   return(
      <div id='contentSection'>
         <div className='headers'>
            <a href='#test' onClick={(e) => setCurrentContent("Projects")}><span className='headerTitle'>Projects</span></a>
            <a href='#test' onClick={(e) => setCurrentContent("Skills")}><span className='headerTitle'>Skills</span></a>
            <a href='' onClick={(e) => setCurrentContent("Experience")}><span className='headerTitle'>Experience</span></a>
            <a href='' onClick={(e) => setCurrentContent("Contact")}><span className='headerTitle'>Contact</span></a>
         </div>
         <div className='currentContent'>

         </div>
      </div>
   )
}


export default Content;
