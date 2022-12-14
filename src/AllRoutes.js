import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home/Home"
import Auth from "./Pages/auth/Auth"
import Questions from './Pages/questions/Questions'
import AskQuestions from './Pages/askQuestions/AskQuestions'
import DisplayQuestions from './Pages/questions/DisplayQuestions'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Auth' element={<Auth/>} />
      <Route path='/Questions' element={<Questions/>} />
      <Route path='/AskQuestions' element={<AskQuestions/>} />
      <Route path='/Questions/:id' element={<DisplayQuestions/>} />
    </Routes> 
  )
}

export default AllRoutes
