import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function home() {
  return (
   <>
   <h1>hey there welcome to my home page</h1>
   <p>check out outher pages also</p>
  <Link to={"/about"} className='bold underline'>Aboutus</Link> 
  <br></br>
  <Link to={"/contact"} className='bold underline'>Contact</Link>
  <button onClick={()=> useNavigate("/about") }>about</button>
  <button>contact</button>
   </>
  )
}

export default home