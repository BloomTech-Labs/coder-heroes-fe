import {
  START_FETCH,
  SUCCESS_FETCH,
  FAIL_FETCH,
  ADD_CLASS,
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
    default:
      return state;
  }
};

export default reducer;
