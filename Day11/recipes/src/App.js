import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import RecipePage from './recipes/RecipePage'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import NavBar from './components/NavBar'
import Spinner from './components/Spinner'
import RequireAuth from './components/RequireAuth'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase';

export default function App() {

  const [user, setUser] = useState(null);
  const [isUserUpdated, setisUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setisUserUpdated(true);
    })
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user}/>

      { isUserUpdated ? 
        <Routes>
          <Route path ='/' element={
            <RequireAuth user={user}>
              <RecipePage />
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