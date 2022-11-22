import React from 'react'
import LeftSideBar from '../../components//leftSidebar/LeftSideBar'
import RightSideBar from '../../components/rightSidebar/RightSideBar'
import HomeMainBar from '../../components//homeMainbar/HomeMainBar'
// import '../../App.css'
function Home() {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
         <HomeMainBar />
         <RightSideBar /> 
      </div>
      
    </div>
  )
}

export default Home
