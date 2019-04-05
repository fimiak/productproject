import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">&#9851;</a>
      </div>
      <ul className="">
        <li>
          <NavLink to="/">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ul className="">
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Sign Up</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
