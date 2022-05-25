import {
  SET_COURSE_ID,
  SET_CURRENT_STUDENT_ID,
  GET_STUDENTS,
  FETCHING,
  ERROR,
  GET_BADGES_BY_ID,
  GET_BADGES,
  ADD_BADGE_TO_STUDENT,
  REMOVE_BADGE_FROM_STUDENT,
} from '../actions/classroomActions';

const initialState = {
  fetching: false,
  error: false,
  students: [],
  currentStudentId: '',
  badges: [],
  studentBadges: [],
  course_id: '',
  errorMessage: '',
  badge_request: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_ID:
      return {
        ...state,
        course_id: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        error: false,
        fetching: false,
      };
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case SET_CURRENT_STUDENT_ID:
      return {
        ...state,
        currentStudentId: action.payload,
      };
    case GET_BADGES:
      return {
        ...state,
        badges: action.payload,
        error: false,
        fetching: false,
      };
    case GET_BADGES_BY_ID:
      return {
        ...state,
        studentBadges: action.payload,
        error: false,
        fetching: false,
      };
    case ADD_BADGE_TO_STUDENT:
      return {
        ...state,
        studentBadges: [...state.studentBadges, action.payload],
        error: false,
        fetching: false,
        badge_request: !state.badge_request,
      };
    case REMOVE_BADGE_FROM_STUDENT:
      return {
        ...state,
        studentBadges: state.studentBadges.filter(
          badge => badge.badge_id !== action.payload.badge_id
        ),
        error: false,
        fetching: false,
        badge_request: !state.badge_request,
      };
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
