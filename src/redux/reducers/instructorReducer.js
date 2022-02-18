//import actions
import {
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  SET_SELECTED_COURSE,
  ADD_COURSE_ACTION,
  ADD_NEW_PROGRAM,
  SET_ERROR,
  GET_NEWSFEEDS,
} from '../actions/instructorActions';
import { dummyData } from '../../dummyData';

const initialState = dummyData;
const instructorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        classes: payload,
      };
    case GET_USER_ACTION:
      return state;
    case GET_INBOX_ACTION:
      return state;
    case SET_SELECTED_COURSE:
      return { ...state, selectedCourse: payload };
    case ADD_COURSE_ACTION:
      const newCourse = {
        ...payload,
        id: Date.now(),
      };
      return {
        ...state,
        courses: [...state.course_schedule, newCourse],
      };
    case ADD_NEW_PROGRAM:
      const newProgram = {
        ...payload,
        id: Date.now(),
      };
      return {
        ...state,
        own_programs: [...state.own_programs, newProgram],
      };
    case SET_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    case GET_NEWSFEEDS:
      //if we are no longer importing dummy data we will need to double check and new state does have newsfeed inside
      return {
        ...state,
        newsfeed: payload,
      };
    default:
      return state;
  }
};

export default instructorReducer;
