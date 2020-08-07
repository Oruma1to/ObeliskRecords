import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logOut, replaceCart } from '../../actions'


export default function Header() {

  const isLogged = useSelector(state => state.isLogged)
  const shoppingCart = useSelector(state => state.shoppingCart)
  useSelector(state => state.forceUpdate)
  const dispatch = useDispatch()

  const cartLength = shoppingCart.reduce((acc, curr) => acc + curr.amount, 0)

  const handleSignOut = () => {
    dispatch(logOut())
    dispatch(replaceCart([]))
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
        {admin_key
          ?
          <>
            <Link to="/createalbum" className='nav-link'>Post Album</Link>
            <p className='nav-link signout admin'>(Admin)</p>

          </>
          :
          null
        }
        {!isLogged
          ?
          <Link to='/signup' className='nav-link'>Sign Up</Link>
          :
          <Link to="/" className='nav-link signout' onClick={handleSignOut}>Sign Out</Link>
        }
        <Link to='/cart' className='nav-link cart'>
          Shopping Cart: {cartLength}
        </Link>
      </ul>
    </div>
  );
}
