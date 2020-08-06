import React, { useState } from 'react'
import { signup } from '../../services/apiUsers'
import { Link } from 'react-router-dom'
import './Signup.css'

export default function Signin() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signup({
      username, password, email
    });

    console.log(response);
  }

  return (
    <>
      <div className="signup-container">
        <p className="signup-title">Sign Up</p>
        <form
          className="signup-form"
          onSubmit={handleSubmit}>

          <input
            className="input-lbl"
            type="text"
            name="username"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <br />

          <input
            className="input-lbl"
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Link className="signup-btn">Submit</Link>
        <p className="signup-su">Already have an account? <Link className="signin-link">Sign In!</Link></p>
      </div>
    </>
  )
}
