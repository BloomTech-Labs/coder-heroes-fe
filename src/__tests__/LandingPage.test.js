import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers/index';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { LandingPage } from '../components/pages/Landing';

const store = createStore(rootReducers);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: null,
      authService: {},
    };
  },
}));

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <LandingPage userInfo={{ name: 'Sara' }} />
      </Router>
    </Provider>
  );
});

describe('LandingPage component', () => {
  test('it renders the LandingPage component', () => {
    expect(screen.getByText('Coding is a Superpower!')).toBeInTheDocument();
  });

  //This test fails because the a tag that surrounds the button has the href and it is larger than the button which leads to an odd user experience.
  //It should be changed so the actual button has the href.
  //This may be an issue with how we are passing properties into the ant design buttons and should be looked into as normal ant design buttons don't seem to do this.

  test('Browse Program button sends to correct route', () => {
    const history = createMemoryHistory();
    const button = screen.getByText('Browse Programs');
    userEvent.click(button);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/browse-programs');
  });

  //same issue as above
  test('Sign Up button is removed from the document', () => {
    expect(screen.getByText('Create Account'))
      .exists()
      .toBeFalse();
  });

  //same issue as above
  test('Visit Website button sends to correct route', () => {
    const button = screen.getByText('Visit Website');
    expect(button).toHaveAttribute('href', 'https://www.codeyourdreams.org/');
  });

  //Based on figma, needs to be implemented
  test('Support Us button exists in dom', () => {
    const button = screen.getByText('Support Us');
    expect(button).toBeInTheDocument();
  });

  test('All images have alt tags', () => {
    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image).toHaveAttribute('alt');
    });
  });

  test('All images render correctly', () => {
    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image).toBeInTheDocument();
    });
  });
});
