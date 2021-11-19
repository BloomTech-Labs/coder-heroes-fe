import InstructorHome from '../components/pages/InstructorHome';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from '../redux/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducers, applyMiddleware(thunk));

describe('<RenderHomePage /> test suite', () => {
  test('render calendar', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <InstructorHome />
        </Router>
      </Provider>
    );
    const yourCalendar = getByText(/your calendar/i);
    expect(yourCalendar).toBeInTheDocument();
    expect(yourCalendar.innerHTML).toBe('Your Calendar');

    const actualCalendar = getByTestId('calendar');
    expect(actualCalendar).toBeInTheDocument();
  });
});

describe('<RenderHomePage /> test suite', () => {
  test('render sidebar', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <InstructorHome />
        </Router>
      </Provider>
    );
    const sidebar = getByTestId('sider');
    expect(sidebar).toBeInTheDocument();
    const dashboard = getByText(/dashboard/i);
    expect(dashboard.innerHTML).toBe('Dashboard');
    const coursesButton = getByText(/courses/i);
    expect(coursesButton.innerHTML).toBe('Courses');
  });
});
