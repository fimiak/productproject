import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginWrapper from '../components/login/LoginWrapper';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">&#9851;</Link>
      </div>
      <ul className="">
        <li>
          <NavLink exact to="/">
            Product
          </NavLink>
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
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Sign Up</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
