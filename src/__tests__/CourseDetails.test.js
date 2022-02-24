import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

//import userEvent from '@testing-library/react';
import CourseDetails from '../components/pages/AdminHome/CourseDetails';

const mockStore = configureStore([]);
describe('Course Details is a connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
    component = renderer.create(
      <Provider store={store}>
        <CourseDetails />
      </Provider>
    );
  });

  it('renders without errors', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
