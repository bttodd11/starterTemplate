import React from 'react';
import "../content/content.css"

const Content = () => {

   // We need to have a on click method that determines which component to render
   return(
      <div className='contentSection'>
         <div className='headers'>
            <span className='headerTitle'>Projects</span>
            <span className='headerTitle'>Skills</span>
            <span className='headerTitle'>Experience</span>
            <span className='headerTitle'>Contact</span>
         </div>
      </div>
   )
}


export default Content;
