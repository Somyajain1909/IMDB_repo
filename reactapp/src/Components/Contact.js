import React from 'react'
import mailbox from './images/mailbox.png'


const Contact = () => {
    
  return (
    <div style={{'display':'flex'}}>
      <div style={{'float':'right','marginLeft':'15%'}}>
       <img src={mailbox} alt="mailbox"/>
      </div>
    <div className='contact-box my-3 mx-3' style={{'float':'left'}}>
        
      <a href='mailto:202052339@iiitvadodara.ac.in' style={{'textDecoration':'none','fontSize':'18px'}}><i class="fa-regular fa-envelope fa-2x"> </i> Somya Jain (202052339@iiitvadodara.ac.in)</a> 
      <a href='https://www.linkedin.com/in/somya-jain-377490207/' style={{'textDecoration':'none','fontSize':'18px'}}> <i class="fa-brands fa-linkedin fa-2x"></i> LinkedIn </a>
      <a href='https://github.com/Somyajain1909' style={{'textDecoration':'none','fontSize':'18px'}}> <i class="fa-brands fa-github fa-2x"></i> SomyaJain1909 </a>  
      </div>
      
      </div>
  )
}

export default Contact
