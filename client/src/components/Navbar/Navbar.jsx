import React ,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search-icon.png'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector,useDispatch } from 'react-redux'
//import Button from '../../components/Button/Button'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'
import {MenuItems} from './MenuItems'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'

const Navbar = () => {
  const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();
    const [state, setState] = useState(false);

    /* const state = {clicked :false}
 
     const handleClick = () => {
         this.setState({ clicked : !this.state.clicked})
     }*/
 const handleClick = () => {
     if(state === false){
      setState(true)
     
     }
    
     else{
         setState(false)
     }
 }


 const handleLogin = () => {
  navigate('/Auth')
}
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/Auth')
        dispatch(setCurrentUser(null))
    }
    
    useEffect(() => {
        const token = User?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[User?.token, dispatch])


          
 
          
  return (
    
    <nav className = "NavbarItems">
               <Link to='/' className='navbar-logo'>
            <img src={logo} alt="stackoverflow" />
            </Link>
           <div className='search-navbar'>
            <input type="text" placeholder='Search...'/>
            <img src={searchicon} alt="" width="18" className='search-icon'/>
            </div>  
                    <p className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={ (state === false) ? faTimes : faBars } />
                    </p>
                
                <form>
                <ul onClick={handleClick} className={(state === true) ? 'nav-menu'  : 'nav-menu active' } >
                    {MenuItems.map((item,index) => {
                        return(
                            <li onClick={handleClick} key={index}><a onClick={handleClick} className={item.cName} href={item.url} >
                            {item.title}
                            </a></li>
                            
                        )
                    })}
                    <li onClick={handleClick}>
                    { User === null ? 
                    <Link onClick={handleClick} to='/Auth' className='nav-links-mobile'>Log in</Link> : 
                    <>
                       <div className='nav-links-mobile'>
                        <div className='profile-view'>
                           
                                <Link className='name-mobileview' onClick={handleClick} to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>
                                   {User.result.name}</Link>
                                    </div>
                                    <Button  onClick={handleLogout}>Log out</Button>
                                </div>
                                
                    </>
                    
                }
                    </li>
                   
                </ul>
                </form>
                <div className='desktop-view'>
                { User === null ? 
                  <Button onClick={handleLogin}> Log In </Button> : 
                    <>
                      
                       <div className='desktop-auth'>
                   <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none', color:"white",marginTop:'10px'}}><Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white' >{ User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
     
                          
                            <Button onClick={handleLogout}>Log out</Button>
                                </div>
                    </>
                    
                }
                </div>
                
            </nav>
  )
}

export default Navbar