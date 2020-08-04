import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from './actions'

import Signin from './components/users/Signin'
import Signup from './components/users/Signup'
import Albums from './components/albums/Albums'
import CreateAlbum from './components/albums/CRUD/CreateAlbum'
import EditAlbum from './components/albums/CRUD/EditAlbum'


function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  // on component did mount, try to log in and set the user 


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
      <Route path="/createalbum">
        <CreateAlbum />
      </Route>
      <Route path="/editalbum/:id">
        <EditAlbum />
      </Route>
    </div>
  );
}

export default App;
