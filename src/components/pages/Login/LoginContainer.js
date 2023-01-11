// import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Hello from Login</button>
    )
  );
};

export default LoginPage;
