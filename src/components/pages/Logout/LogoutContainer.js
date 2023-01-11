
import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const LogoutPage = () => {
  const { logout, isAuthenticated } = useAuth0();
  return !isAuthenticated && <button onClick={() => logout()}>Sign Out</button>;
};


export default LogoutPage;
