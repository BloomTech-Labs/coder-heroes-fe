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
  POST_NEWSFEED,
  PUT_NEWSFEED,
  DELETE_NEWSFEED,
  GET_PROGRAMS,
  GET_INSTRUCTOR,
  SET_POST_ID,
  SET_POST_OPTIONS,
} from '../actions/instructorActions';

const initialState = {
  instructors: [],
  instructor: '',
  courses: [],
  instructor_data: null,
  selectedCourse: '',
  id: null,
  own_programs: [],
  errorMessage: null,
  newsfeed: [],
  post: [],
  postOptions: 'newsFeed',
  postID: 0,
  posted_at: null,
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
      return {
        ...state,
        newsfeed: payload,
      };
    case GET_NEWSFEED:
      return {
        ...state,
        post: payload,
      };
    case POST_NEWSFEED:
      return {
        ...state,
        newsfeed: payload,
      };
    case PUT_NEWSFEED:
      return {
        ...state,
        newsfeed: state.newsfeed.filter(
          post => post.newsfeed_id !== payload.newsfeed_id
        ),
      };
    case DELETE_NEWSFEED:
      return {
        ...state,
        newsfeed: state.newsfeed.filter(
          post => post.newsfeed_id !== payload.newsfeed_id
        ),
      };
    case GET_PROGRAMS:
      return {
        ...state,
        own_programs: payload,
      };
    case SET_POST_ID:
      return {
        ...state,
        postID: payload.postID,
        link: payload.link,
        title: payload.title,
        description: payload.description,
        posted_at: new Date().toISOString(),
      };
    case SET_POST_OPTIONS:
      return {
        ...state,
        postOptions: payload,
      };
    default:
      return state;
  }
};

export default instructorReducer;
