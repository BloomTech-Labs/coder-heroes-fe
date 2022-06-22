import {
  GET_CURRENT_USER,
  GET_INBOX_ACTION,
  SET_ERROR,
} from '../actions/userActions';

const initialState = {
  currentUser: {},
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case GET_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
