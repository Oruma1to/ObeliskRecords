import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from './actions'

import Signin from './components/users/Signin'
import Signup from './components/users/Signup'
import Albums from './components/albums/Albums'
import Header from './components/shared/Header';
import Home from './components/shared/Home'
import Album from './components/albums/Album';


function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
        {/* <h1>IsLogged {isLogged ? "yes" : "no"}</h1>
        <button onClick={() => dispatch(logIn())}>+</button> */}
      </Route>
      <Route path="/albums/:id">
        <Album />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/albums">
        <Albums />
      </Route>
    </div>
  );
}

export default App;
