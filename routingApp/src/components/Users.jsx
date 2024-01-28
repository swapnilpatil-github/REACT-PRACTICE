import React from 'react'
import { useParams } from 'react-router-dom'



function Users() {
    
const users = useParams();
const {name} = users;
  return (
    <div>
        <h1>
            hey i am {name} welcome to my page
        </h1>
    </div>
  )
}

export default Users