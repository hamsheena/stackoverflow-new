import React from 'react'
import { useSelector } from 'react-redux'

import './UserProfile.css'

const ProfileBio = ({currentProfile}) => {

    const users = useSelector((state) => state.usersReducer)
    
    return (
        <div className='profile-bio'>
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.friends.length !== 0 ? (
                        <>
                            <h4>{currentProfile?.friends.length} Friends</h4>
                            {
                            /*    users.map((user) => (
                                    <div  key={user?._id} >
                                         
                                        {
                                             currentProfile?.friends.map((friend) => (
                                                <div key={friend}>
                                                    ({user?._id}==={friend})?
                                         <>
                                            <p>{user?.name} </p>
                                            </>
                                            :<>
                                          <p>ERROR </p>
                                          </>
                                            
                   </div>
               ))}
                                        </div>
                                             ))*/}
                               
                               
                            
                        </>
                    ) : (
                        <p>0 friends</p>
                    )
                }
            </div>
        </div>

    )
}

export default ProfileBio