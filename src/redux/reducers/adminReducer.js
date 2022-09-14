import {
  START_FETCH,
  SUCCESS_FETCH,
  FAIL_FETCH,
  ADD_CLASS,
  DELETE_CLASS,
  EDIT_CLASS,
  GET_INSTRUCTORS,
  DELETE_INSTRUCTORS,
  UPDATE_INSTRUCTOR_INFO,
} from '../actions/adminActions';

export const initialState = {
  class: [],
  isLoading: false,
  error: 'class_test_error',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        class: [],
        isLoading: true,
        error: '',
      };
    case SUCCESS_FETCH:
      return {
        class: action.payload,
        isLoading: false,
        error: '',
      };
    case FAIL_FETCH:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_CLASS:
      const classIndex = state.class.findIndex(
        item => item.class_id === action.payload
      );
      state.class.splice(classIndex, 1);
      return {
        ...state,
        class: state.class,
      };
    case ADD_CLASS:
      return {
        class: [
          ...state.class,
          {
            class_name: action.payload.class_name,
            class_subject: action.payload.class_subject,
            class_desc: action.payload.class_desc,
            class_prereq_list: action.payload.prereq,
            class_id: Date.now(),
          },
        ],
      };
    case EDIT_CLASS:
      const classIndexEdit = state.class.findIndex(
        item => item.class_id === action.payload.class_id
      );
      state.class[classIndexEdit] = action.payload;

      return {
        ...state,
        class: state.class,
      };
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors_info: action.payload.instructorInfoObject,
        test: {
          instructor_id: action.payload.instructor_id,
          name: action.payload.name,
          phone_number: action.payload.phone_number,
          location: action.payload.location,
          email: action.payload.email,
        },
      };
    case DELETE_INSTRUCTORS:
      const instructorIndex = state.instructors_info.findIndex(
        item => item.instructor_id === action.payload
      );
      state.instructors_info.splice(instructorIndex, 1);
      return {
        ...state,
        instructors_info: state.instructors_info,
      };
    case UPDATE_INSTRUCTOR_INFO:
      return {
        ...state,
        instructors: state.instructor.filter(
          instructor =>
            instructor.instructor_id !== action.payload.instructor_id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
