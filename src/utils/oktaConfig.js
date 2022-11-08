const config = {
  //TO-DO: IMPLEMENT AUTH0//
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: false,
  scopes: ['openid', 'email', 'profile'],
};

export default config;
