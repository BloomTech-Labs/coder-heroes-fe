import {
  START_FETCH,
  SUCCESS_FETCH,
  FAIL_FETCH,
  ADD_CLASS,
  DELETE_CLASS,
  EDIT_CLASS,
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
    default:
      return state;
  }
};

export default reducer;
