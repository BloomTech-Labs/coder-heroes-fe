//import actions
import {
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  SET_SELECTED_COURSE,
} from '../actions/instructorActions';
import { dummyData } from '../../dummyData';

const initialState = dummyData;

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return state;
    case GET_USER_ACTION:
      return state;
    case GET_INBOX_ACTION:
      return state;
    case SET_SELECTED_COURSE:
      return { ...state, selectedCourse: action.payload };

    default:
      return state;
  }
};

export default instructorReducer;
