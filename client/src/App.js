import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from './actions'

import Signin from './components/users/Signin'
import Signup from './components/users/Signup'
import Albums from './components/albums/Albums'


function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Route path="/" exact>
        <h1>IsLogged {isLogged ? "yes" : "no"}</h1>
        <button onClick={() => dispatch(logIn())}>+</button>
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/albums">
        <Albums />
      </Route>
    </div>
  );
}

export default App;
