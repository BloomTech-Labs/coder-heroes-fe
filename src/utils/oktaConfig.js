const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: false,
  scopes: ['openid', 'email', 'profile'],
};

export default config;
