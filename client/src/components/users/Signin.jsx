import React, { useState } from 'react'
import { signin } from '../../services/apiUsers'

export default function Signin() {

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  console.log(username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signin({
      username, password
    });

    console.log(response);
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Submit</button>

      </form>

    </div>
  )
}
