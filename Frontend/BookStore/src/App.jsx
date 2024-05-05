import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Course from './Course/Course'

function App() {
  return (
    <>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/course' element={<Course />} />
      </Routes>
    </>
  )
}

export default App