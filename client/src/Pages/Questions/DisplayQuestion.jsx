import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    
    <LeftSidebar/>
    
    <div className='home-container-2'>
      <div className='home-container-3'>
      <QuestionsDetails/>
      </div>
      
      </div>
     
 </div> 
  )
}

export default DisplayQuestion