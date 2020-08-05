import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../actions'


export default function Header() {

  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(logOut())
  }

  let admin_key = false

  if (isLogged) {
    admin_key = isLogged.user.admin_key
  }

  return (
    <div className='header-wrapper'>
      <ul className='header-nav'>
        <Link to='/' className='nav-link'>Home</Link>
        {!isLogged
          ?
          < Link to='/signin' className='nav-link'>Sign In</Link> :
          < Link to='/myprofile' className='nav-link'>My Profile</Link>
        }
        {!isLogged
          ?
          <Link to='/signup' className='nav-link'>Sign Up</Link>
          :
          <Link to="/" className='nav-link signout' onClick={handleSignOut}>Sign Out</Link>
        }
        {admin_key
          ?
          <Link to="/createalbum" className='nav-link'>Post Album</Link>
          :
          null
        }
        <button to='/cart' className='nav-link cart'>
          Shopping Cart
        </button>
      </ul>
    </div>
  );
}
