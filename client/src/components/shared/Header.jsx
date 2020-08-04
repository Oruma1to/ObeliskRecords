import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-wrapper'>
      <ul className='header-nav'>
        <Link to='/albums' className='nav-link'>
          Home
        </Link>
        <Link to='/' className='nav-link'>
          My Profile
        </Link>
        <Link to='/' className='nav-link'>
          About
        </Link>
        <button to='/cart' className='nav-link cart'>
          Shopping Cart
        </button>
      </ul>
    </div>
  );
}
