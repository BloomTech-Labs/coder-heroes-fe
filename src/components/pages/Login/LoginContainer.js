import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// import '../../styles/login.less';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return loginWithRedirect();
};

export default LoginPage;
