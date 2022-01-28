import {
  ADMIN_ADD_COURSE_ACTION,
  ADMIN_ERROR_ACTION,
} from '../actions/adminActions';

const initialState = {};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ADD_COURSE_ACTION:
      const newAdminCourse = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        courses: [...state /* add specific spot here */, newAdminCourse],
      };
    default:
      return state;
  }
};

export default adminReducer;
