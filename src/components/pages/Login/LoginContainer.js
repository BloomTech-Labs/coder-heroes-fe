import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// import '../../styles/login.less';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = '/';
    //TO-DO: Implement Auth0
  };

  return (
    <div className="login-left">
      <form className="login-form">
        <input
          className="input-box-parent-info"
          name="name"
          type="text"
          placeholder="username"
        />
        <input
          className="input-box-parent-info"
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          className="input-box-parent-info"
          name="password"
          type="password"
          placeholder="password"
        />
      </form>
      <div className="content reg-btn-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LoginPage;
