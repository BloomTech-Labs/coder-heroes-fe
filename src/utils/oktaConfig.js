const config = {
  issuer: process.env /**TO-DO: Implement Auth0 */,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: false,
  scopes: ['openid', 'email', 'profile'],
};

export default config;
