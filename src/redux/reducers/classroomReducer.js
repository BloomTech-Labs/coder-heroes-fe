import {
  SET_COURSE_ID,
  GET_STUDENTS,
  FETCHING,
  ERROR,
} from '../actions/classroomActions';

const initialState = {
  fetching: false,
  error: false,
  students: [],
  badges: [],
  course_id: '',
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_ID:
      return { ...state, course_id: action.payload };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        error: false,
        fetching: false,
      };
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
