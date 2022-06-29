import RenderHomePage from '../components/pages/Home/RenderHomePage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';
import { initialState } from '../reducers/currentUser';

const store = createStore(rootReducer, initialState);

describe('<RenderHomePage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    // eslint-disable-next-line no-unused-vars
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <RenderHomePage />
        </Router>
      </Provider>
    );
  });
});
