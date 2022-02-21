import { GET_CURRENT_USER } from '../actions/userActions';

const initialState = {
  currentUser: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default reducer;
