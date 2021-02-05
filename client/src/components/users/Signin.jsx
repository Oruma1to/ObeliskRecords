import React, { useState } from 'react'
import { signin } from '../../services/apiUsers'
import { useDispatch } from 'react-redux'
import { logIn, replaceCart } from '../../actions'
import { Link, useHistory } from 'react-router-dom'
import { getCart } from '../../services/apiCart'
import './Signin.css'

export default function Signin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  let history = useHistory()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await signin({ username, password });
      const data = await getCart()
      dispatch(logIn(response))
      dispatch(replaceCart(data))
      history.push('/')

    } catch (error) {
      console.log(error)
    }
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
        <Link to="blank" className="signin-btn" onClick={handleSubmit}>Submit</Link>
        <p className="signin-su">Don't have an account? <Link to="/signup" className="signup-link">Sign Up!</Link></p>
      </div>
    </>
  )
}
