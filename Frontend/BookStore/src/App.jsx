import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Course from './Course/Course'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    </>
  )
}

export default App