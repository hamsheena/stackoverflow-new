

import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

import '../../App.css'

import MainPost from './MainPost'

const Posts = () => {
  return (
    
    <div className='home-container-1'>
    
    <LeftSidebar/>
    
    <div className='home-container-2'>
      <div className='home-container-3'>
      <MainPost/>
      </div>
      <RightSidebar/>
      </div>
     
 </div> 

  )
}

export default Posts