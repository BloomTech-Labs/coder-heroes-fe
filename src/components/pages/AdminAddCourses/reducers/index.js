import { START_FETCH, SUCCESS_FETCH, FAIL_FETCH, ADD_CLASS } from '../actions';

export const initialState = {
  class: [
    {
      class_id: 'class_id_test',
      class_name: 'class_name_test',
      class_subject: 'class_subject_test',
      class_desc: 'class_desc_test',
      class_prereq_list: ['req1', 'req2', 'req3'],
    },
  ],
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
            class_subject: action.payload.class_subject,
            class_desc: action.payload.class_desc_test,
            class_prereq_list: action.payload.class_prereq_list,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
