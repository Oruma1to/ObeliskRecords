import React, { useState } from 'react'
import { signup } from '../../services/apiUsers'

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
    <div>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Submit</button>

      </form>

    </div>
  )
}
