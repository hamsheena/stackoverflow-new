import React from 'react'

import '../../App.css'
import Comments from './Comments'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


const CommentDetails = () => {
  return (
    
    <div className='home-container-1'>
    
    <LeftSidebar/>
    
    <div className='home-container-2'>
      <div className='home-container-3'>
      <Comments/>
      </div>
     
      </div>
      </div>

  )
}

export default CommentDetails