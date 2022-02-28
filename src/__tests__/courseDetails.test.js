import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act } from '@testing-library/react';
import React from 'react';
import store from '../../src/store';
import CourseDetails from '../components/pages/AdminHome/CourseDetails';

afterEach(() => {
  cleanup();
});

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.resolve({ name: 'sara' }),
      },
    };
  },
}));

describe('Course Details is a connected React-Redux Component', () => {
  let { component, getByText } = render(
    <Provider store={store}>
      <CourseDetails />
    </Provider>
  );
  it('Manage Course Resources button works without errors', () => {
    const button = getByText(/Manage Course Resources/i);
    userEvent.click(button);

    expect(button.textContent).toBe('Manage Course Resources');
  });
});
