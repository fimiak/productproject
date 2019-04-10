import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login.css';

function LoginWrapper() {
  return (
    <div className="login__wrapper">
      <div className="login__title">
        <h1>Login</h1>
        <p>Please login or register below.</p>
      </div>
      <form className="login__form">
        <input placeholder="Account Name" />
        <input placeholder="Password" />
        <div className="login__buttons">
          <Link to="/login" className="login__register">
            Register
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginWrapper;
