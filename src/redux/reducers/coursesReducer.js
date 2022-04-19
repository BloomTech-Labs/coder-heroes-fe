import {
  EDITING,
  CANCEL_EDIT,
  ADD_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
  DELETE_COURSE,
} from '../actions/coursesActions';

const initialState = {
  editing: false,
  courses: [],
  errorMessage: '',
  course_id: '',
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
        recipe: state.courses.map(rec => {
          if (rec.course_id === action.payload.course_id) {
            return action.payload;
          }
          return rec;
        }),
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    case DELETE_COURSE:
      return {
        ...state,
        recipe: state.recipe.filter(rec => rec.course_id !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
