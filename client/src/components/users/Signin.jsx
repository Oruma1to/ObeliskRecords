import React, { useState } from 'react'
import { signin } from '../../services/apiUsers'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions'
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
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
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
        <br />
        <button className="signin-btn">Submit</button>
      </form>
    </div>
  )
}
