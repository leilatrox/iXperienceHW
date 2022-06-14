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
import Navbar from './components/common/Navbar'
import RequireAuth from './components/common/RequireAuth'
import Spinner from './components/common/Spinner'

export default function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setisUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setisUserUpdated(!isUserUpdated);
    })
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      { isUserUpdated ? 
        <Routes>
          <Route path ='/' element={
            <RequireAuth user={user}>
              <TasksPage />
            </RequireAuth>}
          />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      :
        <div className="text-center mt-3">
          <Spinner/>
        </div>
      }
    </BrowserRouter>
  
    
  )
}
