import React, { useState } from 'react';
import Login from './UseForm';
import './HeaderNavStyle.css';
import {NavHashLink as NavLink } from 'react-router-hash-link';


function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar   w-full h-16 fixed  rounded-lg flex justify-between mx-auto items-center gap-4 p-4'>
      <a className="flex items-center space-x-3" href="https://www.nike.com/">
        <img
          src="https://i.pinimg.com/originals/a4/2f/d9/a42fd99efbea744abc0b4b1f18327630.png"
          alt="Nike Logo"
          className="logo"
        />
        <div className="text-3xl text-black font-bold self-center"><span className="text-red-500">Nike</span><span>Store</span></div>
      </a>
      
    <div>
    <ul className="navbar-menu hidden space-x-8 font-bold text-red-500 md:flex lg:flex">
      <li>
        <NavLink className="active" smooth to="/path#home" >Home</NavLink></li>
      <li>
        <NavLink className="active" to="/path#products">Products</NavLink></li>
      <li>
        <NavLink className="active" to="/path#about">About</NavLink></li>
      <li>
        <NavLink className="active" to="/path#footer">Contact</NavLink></li>
     </ul>
    </div>
      
      <button
        className="navbar-hamburger inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        aria-controls="navbar-hamburger"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} hamburger-menu mt-4 w-full p-2 absolute top-11 right-0 md:mt-4 md:top-44 md:right-0   md:p-0 md:w-auto  md:bg-transparent lg:top-16 lg:mt-2 lg:right-2/5`} id="navbar-hamburger">
          <Login />
      </div>
    </div>
  );
}

export default HeaderNav;
