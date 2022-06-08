//import actions
import {
  GET_INSTRUCTORS,
  GET_USER_ACTION,
  GET_INSTRUCTOR_COURSES,
  GET_INBOX_ACTION,
  SET_SELECTED_COURSE,
  ADD_COURSE_ACTION,
  ADD_NEW_PROGRAM,
  SET_ERROR,
  GET_NEWSFEEDS,
  GET_NEWSFEED,
  PUT_NEWSFEED,
  DELETE_NEWSFEED,
  GET_PROGRAMS,
  GET_INSTRUCTOR,
} from '../actions/instructorActions';
// import { dummyData } from '../../dummyData';

// const initialState = dummyData;

const initialState = {
  instructors: [],
  instructor: '',
  courses: [],
  instructor_data: null,
  selectedCourse: '',
  id: null,
  own_programs: [],
  errorMessage: null,
  newsfeed: {},
};

const instructorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: payload,
      };
    case GET_INSTRUCTOR:
      return {
        ...state,
        instructor: payload,
      };
    case GET_INSTRUCTOR_COURSES:
      return {
        ...state,
        courses: payload,
      };
    case GET_USER_ACTION:
      return {
        ...state,
        instructor_data: payload,
      };
    case GET_INBOX_ACTION:
      return state;
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: payload,
      };
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

    case GET_NEWSFEED:
      return {
        ...state,
        newsfeed: payload,
      };
    case PUT_NEWSFEED:
      return {
        ...state,
        newsfeed: payload,
      };
    case DELETE_NEWSFEED:
      return {
        ...state,
        newsfeed: payload,
      };

    case GET_PROGRAMS:
      return {
        ...state,
        own_programs: payload,
      };
    default:
      return state;
  }
};

export default instructorReducer;
