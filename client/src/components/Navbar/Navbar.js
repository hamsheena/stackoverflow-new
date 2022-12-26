import React ,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search-icon.png'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector,useDispatch } from 'react-redux'
//import Button from '../../components/Button/Button'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'

const Navbar = () => {
  const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();
    const [isMobile,setIsMobile]= useState(false);
    
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
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt="stackoverflow" />
            </Link>
            <form action="" className='search-form'>
            <input type="text" placeholder='Search...'/>
            <img src={searchicon} alt="" width="18" className='search-icon'/>
        </form>
            <ul className='ul-nav-links' onClick={() => setIsMobile(false)}>
            <Link to='/' className={(isMobile===false)?'nav-item nav-btn':'nav-mobile-item'}><li>About</li></Link>
            <Link to='/' className={(isMobile===false)?'nav-item nav-btn':'nav-mobile-item'}><li>Products</li></Link>
            <Link to='/' className={(isMobile===false)?'nav-item nav-btn':'nav-mobile-item'}><li>For Teams</li></Link>
      
        {User==null
        ?<Link to='/Auth' className={(isMobile===false)?'nav-item nav-links':'nav-mobile-item'}><li>Log in</li></Link>
        : <>
        <div className={(isMobile===false)?'nav-item nav-links1':'nav-mobile-item2'}>
         <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none'}} className={isMobile===true&&'nav-mobile-item'}>
         {(isMobile===false)? (<Avatar backgroundColor='#009dff' px='10px' py='10px' borderRadius='50%' color='white'><li>{ User.result.name.charAt(0).toUpperCase()}</li></Avatar>
          ) : (<li> {User.result.name}</li>)}
           </Link>
            </div>
            <div className='centre-logout'>
          <button className={(isMobile===false)?'nav-item nav-links':'nav-mobile-item1'} onClick={handleLogout}><li>Log out</li></button>
          </div>
          </>
        }
        </ul>
        </div>
       
<button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
   {
       <FontAwesomeIcon icon={ (isMobile === true) ? faTimes : faBars } />
   }
</button>
    </nav>
  )
}

export default Navbar