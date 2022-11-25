import React from 'react'
import RightSideBar from '../../components/rightSidebar/RightSideBar'
import LeftSideBar from '../../components//leftSidebar/LeftSideBar'
import QuestionDetails from '../questions/QuestionDetails'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
        <QuestionDetails/>
         <RightSideBar />          
      </div>
      
    </div>
  )
}

export default DisplayQuestions
