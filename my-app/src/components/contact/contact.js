import React from 'react';
import '../contact/contact.css'
import Github from '../image/github.png'
import Instagram from '../image/instagram.png'
import LinkedIn from '../image/linkedIn.png'
import Medium from '../image/medium.png'
import Twitter from '../image/twitter.png'



const Contact = () => {
return(
   <div>
   <div className="contactWrapper">
   <p id='contentTitle'>Contact</p>
   <p className='contactTitle'>Wanna Collab ?</p>
   <p>Wanna work together ? Feel free to reach out and I will get back with you as soon as possible.</p>
   <p className='contactTitle'>Social Media</p>
<span><img src={Github} className='socialIcons' /></span>
<span><img src={Instagram} className='socialIcons' /></span>
<span><img src={LinkedIn} className='socialIcons' /></span>
<span><img src={Medium} className='socialIcons' /></span>
<span><img src={Twitter} className='socialIcons' /></span>
   </div>
   </div>
)
}


export default Contact;
