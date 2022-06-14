import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import Button from './Button';

export default function NavBar(props) {

  const[loading,setLoading] = useState(false);
  async function logoutClicked() {
    await signOut(auth);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ms-2">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      {
        props.user ? 
          <li className='nav-item'>
            <Button type='submit' onClick={logoutClicked} loading={loading}>
              Logout
            </Button>
          </li>
          :
          <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
          </>
      }
    </nav>
  )
}
