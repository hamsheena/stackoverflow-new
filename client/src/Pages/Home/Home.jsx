import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import useWindowSize from '../../components/hooks/useWindowSize'

const Home = () => {
  const { width } = useWindowSize();
  return (
  <div className='home-container-1'>
  
      <LeftSidebar/>
     
      
      <div className='home-container-2'>
        <div className='home-container-3'>
        <HomeMainbar/>
        </div>
        <RightSidebar/>
        </div>
       
   </div>   
    
  )
}

export default Home