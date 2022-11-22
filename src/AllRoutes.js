import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home/Home"
import Auth from "./Pages/auth/Auth"
import Questions from './Pages/questions/Questions'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Auth' element={<Auth/>} />
      <Route path='/Questions' element={<Questions/>} />
    </Routes> 
  )
}

export default AllRoutes
