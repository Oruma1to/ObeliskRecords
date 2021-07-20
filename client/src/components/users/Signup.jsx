import React, { useState } from 'react';
import { signup } from '../../services/apiUsers';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../actions/index';
import './Signup.css';

export default function Signin() {
  // So things I added that I think was missing
  // useDispatch - to dispatch the action
  // logIn  - this the action needed to log
  //useHistory - to use to push to another route/page

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password);

  const history = useHistory();
  const dispatch = useDispatch();

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   console.log('herer!!!!!');
  //   const response = await signup({
  //     username,
  //     password,
  //     email,
  //   });

  //   console.log(response);
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await signup({
        username,
        password,
        email,
      });
      dispatch(logIn(response));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='signup-container'>
        <p className='signup-title'>Sign Up</p>
        <form className='signup-form' onSubmit={handleSubmit}>
          <input
            className='input-lbl'
            type='text'
            name='username'
            placeholder='User Name'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <br />

          <input
            className='input-lbl'
            type='text'
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />

          <input
            className='input-lbl'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {/* So here I create a div tag with an onclick so that everytime they click the button will handle the submit */}
          <div onClick={handleSubmit} className='signup-btn'>
            Submit
          </div>
        </form>
        {/* <Link className='signup-btn'>Submit</Link> */}
        <p className='signup-su'>
          Already have an account? <Link  to="/signin"className='signin-link'>Sign In!</Link>
        </p>
      </div>
    </>
  );
}
