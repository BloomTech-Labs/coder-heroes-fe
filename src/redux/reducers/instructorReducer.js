//import actions
import {
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  SET_SELECTED_COURSE,
  ADD_COURSE_ACTION,
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
    case ADD_COURSE_ACTION:
      const newCourse = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        courses: [...state.course_schedule, newCourse],
      };

    default:
      return state;
  }
};

export default instructorReducer;
