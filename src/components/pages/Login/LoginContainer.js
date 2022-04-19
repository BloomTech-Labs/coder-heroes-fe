import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '../../../styles/login.less';

import { config } from '../../../utils/oktaConfig';

const LoginContainer = () => {
  const history = useHistory();
  const loadWidget = useCallback(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
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
          'primaryauth.title': 'WELCOME BACK',
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

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
    return { widget };
  }, [history]);

  useEffect(() => {
    const widget = loadWidget();
    return () => {
      widget.remove();
    };
  }, [loadWidget]);

  return (
    <div className="login-container">
      <div className="left-login">
        <div className="left-login-text">
          <p className="color-two">Unleash your superpowers today!</p>
          <p className="color-three">creativity & design</p>
          <p className="color-four">user research & insight</p>
          <p className="color-five">app development</p>
        </div>
      </div>
      <div id="sign-in-widget" />
    </div>
  );
};

export default LoginContainer;
