import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-wrapper'>
      <ul className='header-nav'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/signin' className='nav-link'>Sign In</Link>
        <Link to='/signup' className='nav-link'>Sign Up</Link>
        <button to='/cart' className='nav-link cart'>
          Shopping Cart
        </button>
      </ul>
    </div>
  );
}
