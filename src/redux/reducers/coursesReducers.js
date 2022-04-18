import {
  ADD_COURSE,
  GET_COURSES,
  UPDATE_COURSE,
  DELETE_COURSE,
} from '../actions/coursesActions';

const initialState = {
  bookings: [],
  courses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case UPDATE_COURSE:
      const classIndexEdit = state.class.findIndex(
        item => item.class_id === action.payload.class_id
      );
      state.class[classIndexEdit] = action.payload;

      return {
        ...state,
        class: state.class,
      };
    case ADD_COURSE:
      return {
        courses: [
          ...state.courses,
          {
            courses_name: action.payload.courses_name,
            courses_subject: action.payload.courses_subject,
            courses_desc: action.payload.courses_desc,
            courses_prereq_list: action.payload.prereq,
            courses_id: Date.now(),
          },
        ],
      };
    case DELETE_COURSE:
      const classIndex = state.courses.findIndex(
        item => item.courses_id === action.payload
      );
      state.courses.splice(classIndex, 1);
      return {
        ...state,
        courses: state.courses,
      };
    default:
      return state;
  }
};
export default reducer;
