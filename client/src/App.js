import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Signin from './components/users/Signin'
import Signup from './components/users/Signup'
import Albums from './components/albums/Albums'


function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <h1>Root</h1>
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
