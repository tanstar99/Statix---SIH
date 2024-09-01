import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin">
      <h2>Sign In</h2>
      <Link to="/admin-login">Admin Login</Link>
      <br />
      <Link to="/user-login">User Login</Link>
    </div>
  );
};

export default SignIn;
