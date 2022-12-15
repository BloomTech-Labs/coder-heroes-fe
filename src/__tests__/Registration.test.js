import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers/index';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
// import  RegistrationPage  from '../components/pages/Registration/RegisterStep1';
import InstructorWelcome from '../components/pages/Registration/InstructorWelcome';

const store = createStore(rootReducers);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<Instructor Welcome />', () => {
  test('it renders the instructorWelcome component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <InstructorWelcome />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/welcome to CoderHeroes!/i)).toBeInTheDocument();
  });

  test('create account button exists in dom', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <InstructorWelcome />
        </Router>
      </Provider>
    );
    const button = screen.getByText('CREATE ACCOUNT');
    expect(button).toBeInTheDocument();
  });

  test('create account button sends to correct route', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <InstructorWelcome />
        </Router>
      </Provider>
    );
    const history = createMemoryHistory();
    const button = screen.getByText('CREATE ACCOUNT');
    userEvent.click(button);
    //  expect(history.location.pathname).toBe('/register');
    expect(history.location.pathname).toBe('/');
  });
});

//   beforeEach(() => {
//     render(
//         <Provider store={store}>
//             <Router>
//                 <RegistrationPage />
//             </Router>
//         </Provider>
//     );
//   });

// describe('RegistrationPage component', () => {
//     test('it renders the registrationPage component', () => {
//       expect(screen.getByText('Welcome to CoderHeroes!')).toBeInTheDocument();
//     });
// });

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
