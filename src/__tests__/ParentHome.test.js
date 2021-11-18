import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers/index';

import ParentHome from '../components/pages/ParentHome';

const store = createStore(rootReducers);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Parent home component', () => {
  test('Parent home component renders without any errors', () => {
    render(
      <Provider store={store}>
        <Router>
          <ParentHome />
        </Router>
      </Provider>
    );
  });
});
