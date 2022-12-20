import React from 'react'
import { Link } from 'react-router-dom'

import '../Users/Users.css'

const friendList = ({user}) => {
  return (
    
        <Link to={`/Users/${user}`} className='user-profile-link'>
           
            <h5>{ user.name }</h5>
        </Link>
    
  )
}

export default friendList

