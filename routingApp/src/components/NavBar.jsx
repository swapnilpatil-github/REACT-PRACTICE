import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <>
    
    <ul className='navbar'>
        <li><Link to={"/about"}>ABOUTUS</Link></li>
        <li> <Link to={"/contact"}>CONTACT</Link></li>
        <li> <Link to={"/"}>HOME</Link></li>
        
    </ul>
    
  
   
    </>
  )
}

export default NavBar