import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import Alert from "../components/common/Alert";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      console.log(userCred);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-4">
      <div className="card card-body">
        <h1>Login</h1>
        <p>Please enter your email and password to register</p>
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="px-5" loading={loading}>
              Log In
            </Button>
          </div>
        </form>

        <Alert className="mt-4" show={error} onHide={() => setError("")}>
          {error}
        </Alert>
      </div>
    </div>
  );
}
