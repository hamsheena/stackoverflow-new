import React,{useState} from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import globe from '../../assets/globe.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'

const LeftSidebar = () => {
  const [isSideNav,setIsSideNav]= useState(false);
 
  return (
    <div className={(isSideNav===false)?'left-sidebar':'left-sidebar1'}>
   
      <ul className={(isSideNav===false)?'side-nav':'side-nav-mobile'}>
       <NavLink to='/' className={(isSideNav===false)?'side-nav-links':'nav-sidemobile-item'} activeClassName='active'>
      <li> <p>Home</p></li>
       </NavLink>
       <div className={(isSideNav===false)?'side-nav-div':'nav-sidemobile-item'}>
        <div><li><p>PUBLIC</p></li></div>
        
        <NavLink to='/Questions' className={(isSideNav===false)?'side-nav-links':'nav-sidemobile-item1'} activeClassName="active">
       <li> <img src={globe} alt="globe" width="32"/></li>
       <li> <p style={{paddingLeft:"10px"}}>Questions</p></li>
        </NavLink>
        <NavLink to='/Tags' className={(isSideNav===false)?'side-nav-links':'nav-sidemobile-item'} activeClassName="active" style={{paddingLeft:"40px"}}>
         <li><p>Tags</p></li>
          </NavLink>
          <NavLink to='/Users' className={(isSideNav===false)?'side-nav-links':'nav-sidemobile-item'} activeClassName="active" style={{paddingLeft:"40px"}}>
           <li> <p>Users</p></li>
            </NavLink>
            <NavLink to='/Posts' className={(isSideNav===false)?'side-nav-links':'nav-sidemobile-item'} activeClassName="active" style={{paddingLeft:"40px"}}>
            <li><p>Posts</p></li>
            </NavLink>

       </div>
    
      </ul>
      <button className='mobile-icon' onClick={() => setIsSideNav(!isSideNav)}>
   {
       <FontAwesomeIcon icon={ (isSideNav === true) ? faTimes : faBars } />
   }
</button>
    </div>
  )
}

export default LeftSidebar