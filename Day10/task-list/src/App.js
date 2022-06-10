import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase';

import TasksPage from './tasks/TasksPage'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
//import Navbar from './components/common/Navbar'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, []);

  return (
    <BrowserRouter>
      {/* <Navbar user={user}/> */}
      <Routes>
        <Route path ='/' element={<TasksPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  
    
  )
}
