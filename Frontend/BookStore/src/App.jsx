import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Course from './Course/Course'
import Signup from './components/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './Context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to="/signup" />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App