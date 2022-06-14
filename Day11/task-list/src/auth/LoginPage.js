import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    try{
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      console.log(userCred);
      navigate('/');
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className='container my-4'>
      <div className='card card-body'>
        <h1>Login</h1>
        <p>Please enter your email and password to register</p>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control"/>
          </div>
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary px-5'>
              Register
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}
