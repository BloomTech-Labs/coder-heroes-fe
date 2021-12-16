import {
  FETCH_BOOKINGS_FAILURE,
  FETCH_BOOKINGS_START,
  FETCH_BOOKINGS_SUCCESS,
  GET_CHILDREN_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
  SIGNUP_COURSE_ACTION,
} from '../actions/parentActions';
import { parentDummyData } from '../../parentDummyData';

const reducer = (state = parentDummyData, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_CHILDREN_ACTION:
      return {
        ...state,
        children: action.payload,
      };
    case GET_SESSIONS_ACTION:
      return {
        ...state,
        sessions: action.payload,
      };
    case GET_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    case SIGNUP_COURSE_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_BOOKINGS_START:
      return {
        ...state,
        bookings: {
          isFetching: true,
          bookings: [],
          error: '',
        },
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: {
          isFetching: false,
          bookings: action.payload,
          error: '',
        },
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        bookings: {
          isFetching: false,
          bookings: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
