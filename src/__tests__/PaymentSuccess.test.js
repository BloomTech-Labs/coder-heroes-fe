import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers/index';
import PaymentSuccess from '../components/pages/ParentHome/PaymentSuccess';

const store = createStore(rootReducers);
//TO-DO: Implement mock for Auth0

describe('<PaymentSuccess />', () => {
  test('it renders the PaymentSuccess component', () => {
    render(
      <Provider store={store}>
        <Router>
          <PaymentSuccess />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/Payment Successful!/i)).toBeInTheDocument();
  });

  test('Home button exists in dom', () => {
    render(
      <Provider store={store}>
        <Router>
          <PaymentSuccess />
        </Router>
      </Provider>
    );
    const button = screen.getByText('Home');
    expect(button).toBeInTheDocument();
  });

  test('See your bookings button exists in dom', () => {
    render(
      <Provider store={store}>
        <Router>
          <PaymentSuccess />
        </Router>
      </Provider>
    );
    const button = screen.getByText('See your bookings');
    expect(button).toBeInTheDocument();
  });
});
