import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '../../../styles/login.less';

import config from '../../../utils/oktaConfig';

const LoginContainer = () => {
  const history = useHistory();
  const loadWidget = useCallback(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      el: '#sign-in-widget',
      clientId,
      redirectUri,
      registration: {
        click: function() {
          history.push('/register');
        },
        // there is more we can do to handle some errors here.
      },
      features: {
        registration: true,
      },
      // turning this feature on allows your widget to use Okta for user registration
      i18n: {
        en: {
          // Labels
          'primaryauth.title': 'Welcome Back!',
          'primaryauth.submit': 'Login',
          'registration.signup.text': 'Register here',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget
      .showSignInAndRedirect({
        // Assumes there is an empty element on the page with an id of 'osw-container'
      })
      .catch(function(error) {
        // This function is invoked with errors the widget cannot recover from:
        // Known errors: CONFIG_ERROR, UNSUPPORTED_BROWSER_ERROR
      });
    return widget;
  }, [history]);

  useEffect(() => {
    loadWidget();
  }, [loadWidget]);

  return (
    <div className="login-container">
      <div className="left-login">
        <div className="left-login-text">
          <p>Unleash your superpowers today!</p>
          <p>Creativity & Design</p>
          <p>User-research & Insight</p>
          <p>App Development</p>
        </div>
      </div>
      <div id="sign-in-widget" />
    </div>
  );
};

export default LoginContainer;
