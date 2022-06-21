import {
  GET_CURRENT_USER,
  SET_ERROR,
  GET_CONVERSATIONS_ACTION,
  GET_CONVERSATIONS_SUCCESS,
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
    case GET_CONVERSATIONS_ACTION:
      return {
        ...state,
        conversations: { isFetching: true, conversations: [] },
      };
    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversations: { isFetching: false, conversations: action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
