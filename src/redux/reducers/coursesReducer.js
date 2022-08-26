import {
  EDITING,
  CANCEL_EDIT,
  ADD_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
  DELETE_COURSE,
  ERROR,
} from '../actions/coursesActions';

const initialState = {
  editing: false,
  courses: [
    {
      course_id: 1,
      course_name: 'Intro to JS',
      instructor: 'John Doe',
      program_name: 'CoderYoga',
      date: '12/01/2023',
    },
  ],
  errorMessage: '',
  course_id: '',
  newCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case EDITING:
      return {
        ...state,
        editing: true,
        course_id: action.payload,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        editing: false,
      };
    case UPDATE_COURSE:
      return {
        ...state,
        courses: state.courses.map(rec => {
          if (rec.course_id === action.payload.course_id) {
            return action.payload;
          }
          return rec;
        }),
      };
    case ADD_COURSE:
      return {
        ...state,
        newCourses: [...state.newCourses, action.payload],
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(rec => rec.course_id !== action.payload),
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
