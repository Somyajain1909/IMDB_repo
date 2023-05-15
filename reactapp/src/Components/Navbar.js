import React from 'react'

const Navbar = () => {
  return (
    <div className='myn-3 '>
       <ul style={{'list-style-type': 'none',
  'margin': '0',
  'padding': '0'}}>
  <li><a href="/">Home</a></li>
  <li><a href="#dashboard">Dashboard</a></li>
  <li><a href="#contact">Contact</a></li>
<label className="switch myn-3 mx-3 toggle">
  
  <input type="checkbox"/>
  
  <span class="slider round"></span>
</label>
</ul> 
    </div>
  )
}

export default Navbar
