import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyuser } from './services/apiUsers';
import { logIn } from './actions';

import Signin from './components/users/Signin';
import Signup from './components/users/Signup';
import Albums from './components/albums/Albums';

import Header from './components/shared/Header';
import Home from './components/shared/Home';
import Album from './components/albums/Album';
import CreateAlbum from './components/albums/CRUD/CreateAlbum';
import EditAlbum from './components/albums/CRUD/EditAlbum';
import MyProfile from './components/users/MyProfile';
import EditMyProfile from './components/users/EditMyProfile';

import ShoppingCart from './components/shoppingCart/ShoppingCart';

function App() {
  // const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  // on component did mount, try to log in and set the user

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const response = await verifyuser();
      // console.log(response);
      dispatch(logIn(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <Header />
      <div
        style={{
          height: '100px',
        }}></div>
      <Route path='/' exact>
        <Home />
        {/* <h1>IsLogged {isLogged ? "yes" : "no"}</h1>
        <button onClick={() => dispatch(logIn())}>+</button> */}
      </Route>
      <Route path='/albums/:id'>
        <Album />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/albums'>
        <Albums />
      </Route>
      <Route path='/createalbum'>
        <CreateAlbum />
      </Route>
      <Route path='/editalbum/:id'>
        <EditAlbum />
      </Route>
      <Route exact path='/cart/'>
        <ShoppingCart />
      </Route>
      <Route exact path='/my-profile/'>
        <MyProfile />
      </Route>
      <Route exact path='/edit-MyProfile/'>
        <EditMyProfile />
      </Route>
    </div>
  );
}

export default App;
