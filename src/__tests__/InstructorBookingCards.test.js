import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import InstructorBookingCards from '../../src/components/pages/InstructorBooking';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

const store = createStore(rootReducer);

window.history.pushState({}, 'Instructor Booking', '/instructor-booking');

describe('InstructorBooking testing suite', () => {
  test('InstructorBooking index file renders', async () => {
    const bookingPage = render(
      <Provider store={store}>
        <Router>
          <InstructorBookingCards />
        </Router>
      </Provider>
    );
    expect(bookingPage).toBeTruthy();
  });
});
