import React,{useState} from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import globe from '../../assets/globe.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
 faHouse,
  faBars,
  faQuestion,
  faTags,
  faPeopleArrows,
  faPhotoVideo
}from '@fortawesome/free-solid-svg-icons';



const LeftSidebar = () => {

  const[isOpen ,setIsOpen] = useState(false);
const toggle = () => setIsOpen (!isOpen);
const menuItem=[
  {
    path:"/",
    name:"HOME",
    icon: <FontAwesomeIcon icon={faHouse} />
},
    {
        path:"/Questions",
        name:"Questions",
        icon: <FontAwesomeIcon icon={faQuestion} />
    },
    {
        path:"/Tags",
        name:"Tags",
        icon: <FontAwesomeIcon icon={faTags}/>
    },
  
    {
        path:"/Users",
        name:"Users",
        icon: <FontAwesomeIcon icon={faPeopleArrows}/>
    },
    {
      path:"/Posts",
      name:"Posts",
      icon: <FontAwesomeIcon icon={faPhotoVideo}/>
  }
]

  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
      
      <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
       
        <div className="top_section">
        <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                   <FontAwesomeIcon icon={faBars}  onClick={toggle} /> 
                   </div>
        <img src={globe} alt="globe" width="32" style={{display: isOpen ? "block" : "none"}} className="logo"/>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">PUBLIC</h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="side-nav-links" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           
       

       </div>
       </div>
    
      </nav>
    </div>
  )
}

export default LeftSidebar