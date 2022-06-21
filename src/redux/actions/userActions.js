import axiosWithAuth from '../../utils/axiosWithAuth';
<<<<<<< HEAD
// import axios from 'axios';
=======
import axios from 'axios';
>>>>>>> 28dd6fe (Mapped states to props in MessageList, added useEffect for testing)
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';

export const getCurrentUser = (idToken, oktaAuth) => async dispatch => {
  if (oktaAuth.isAuthenticated) {
    oktaAuth
      .getUser()
      .then(parsedJWT => {
        axiosWithAuth(idToken)
          .get(`/profiles/${parsedJWT.sub}`)
          .then(res => {
            dispatch({
              type: GET_CURRENT_USER,
              payload: res.data,
            });
          });
      })
      .catch(err => {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  }
};

<<<<<<< HEAD
// export const getConversations = () => dispatch => {
//   dispatch({ type: GET_CONVERSATIONS_ACTION });
//   axios
//     .get(`${process.env.REACT_APP_API_URI}/conversation_id/`)
//     .then(res => {
//       dispatch({ type: GET_CONVERSATIONS_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: SET_ERROR, payload: err });
//     });
// };
=======
export const getConversations = () => dispatch => {
  dispatch({ type: GET_CONVERSATIONS_ACTION });
  axios
    .get(`${process.env.REACT_APP_API_URI}/conversation_id/`)
    .then(res => {
      dispatch({ type: GET_CONVERSATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: err });
    });
};
>>>>>>> 28dd6fe (Mapped states to props in MessageList, added useEffect for testing)
