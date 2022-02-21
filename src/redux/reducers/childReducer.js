import {
  GET_CHILDREN_ACTION,
  GET_CHILDREN_SUCCESS,
  GET_COURSES_SUCCESS,
  GET_COURSES_ACTION,
} from '../actions/childAction';

const initialState = {
  child: {
    child_id: 0,
    profile_id: 0,
    username: '',
    age: 0,
    parent_id: 0,
  },
  courses: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_CHILDREN_ACTION:
      return {
        ...state,
        child: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
