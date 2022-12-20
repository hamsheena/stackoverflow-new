import React, {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen,faUserFriends } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'
import MainPost from '../Posts/MainPost'
import { friendUser } from '../../actions/users'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)
    const [following, setFollowing] = useState(false);
   // const[fetchAgain,setFetchAgain] = useState(false)
    const dispatch = useDispatch()
   // const{error:followError, message:followMessage} = useSelector((state) => state.follow)
    //const [errors, setErrors] = useState(null);
    //const [success, setSuccess] = useState(null);
    //const [openE, setOpenE] = useState(false);
   
    const followHandle = (e) => {
        e.preventDefault()
        setSwitch(false)
        setFollowing(!following)
        dispatch(friendUser(id))//id is the id from params of selected users
      //  setFetchAgain(!fetchAgain)
    }
    

    useEffect(() => {
        
        setFollowing(
          
            currentUser?.result?.friends?.some((friend) => friend === currentProfile._id)
        );
        
      }, [currentUser, currentProfile]);

   /* useEffect(() => {
        if(currentUser){
             currentUser?.result?.friends.map(friends => {
                if(friends._id===currentProfile._id){
                    console.log("inside if")
                    return setFollowing(true)
                }
            })
        }else{
            console.log("inside else")
            return setFollowing(false)
        }
    },[currentUser,currentProfile])*/



  

  

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2">
            <div className="home-container-3">
                <section>
                    <div className="user-details-container">
                        <div className='user-details'>
                        
                        <img src={currentProfile?.pic} alt= {currentProfile?.name.charAt(0).toUpperCase()} className="user-pic" />
                        
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id ? (
                                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                                </button>
                            ) : 
                            <>
                         
                                <button type='button' onClick={followHandle} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faUserFriends} /> {following?'Unfriend':'Add Friend'}
                                </button>
                            </>
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                            ) : <>
                                <ProfileBio currentProfile={currentProfile}/>
                                <MainPost />
                            </>
                        }
                    </>
                </section>
                </div>
            </div>
        </div>
    )
}

export default UserProfile