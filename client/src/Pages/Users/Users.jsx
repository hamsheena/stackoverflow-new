import React from 'react'
//import { useLocation } from 'react-router-dom'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {

    return (
        <div className='home-contain-1'>
            <LeftSidebar />
            
            <div className="home-contain-2">
            <div className="home-contain-3">
                <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
            </div>
            </div>
        </div>
    )
}

export default Users