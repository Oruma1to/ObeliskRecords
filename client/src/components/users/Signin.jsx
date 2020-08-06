import React, { useState } from 'react'
import { signin } from '../../services/apiUsers'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions'
import { Link } from 'react-router-dom'
import './Signin.css'

export default function Signin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  console.log(username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signin({
      username, password
    });

    console.log(response);
    dispatch(logIn(response))
  }

  return (
    <>
      <div className="signin-container">
        <p className="signin-title">Sign In</p>
        <form
          className="signin-form"
          onSubmit={handleSubmit}>
          <input
            className="input-lbl"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className="input-lbl"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Link className="signin-btn" onClick={handleSubmit}>Submit</Link>
        <p className="signin-su">Don't have an account? <Link to="/signup" className="signup-link">Sign Up!</Link></p>
      </div>
    </>
  )
}
