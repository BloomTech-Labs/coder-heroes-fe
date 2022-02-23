import {
  START_FETCH,
  SUCCESS_FETCH,
  FAIL_FETCH,
  ADD_CLASS,
  DEL_CLASS,
  EDIT_CLASS,
} from '../actions/adminActions';

export const initialState = {
  class: [],
  isLoading: false,
  isEditing: false,
  error: 'class_test_error',
};

// isEditingClass boolean to check if edits, goes into edit mode

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
        isLoading: false,
        error: action.payload,
      };
    case ADD_CLASS:
      return {
        class: [
          ...state.class,
          {
            class_name: action.payload.class_name,
            class_subject: action.payload.subject,
            class_desc: action.payload.description,
            class_prereq_list: action.payload.prereq,
          },
        ],
      };
    case DEL_CLASS:
      return {
        ...state,
        class: state.class.splice(action.payload, 1),
      };
    case EDIT_CLASS:
      const newArray = [...state.class];
      newArray[action.index] = action.payload;
      return {
        ...state,
        class: newArray,
        isEditing: true,
      };
    default:
      return state;
  }
};

export default reducer;
