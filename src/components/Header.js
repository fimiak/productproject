import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">&#9851;</a>
      </div>
      <ul className="">
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <ul className="">
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
