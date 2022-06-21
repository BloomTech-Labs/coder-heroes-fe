import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';
export const GET_CONVERSATIONS_ACTION = 'GET_CONVERSATIONS_ACTION';
export const GET_CONVERSATIONS_SUCCESS = 'GET_CONVERSATIONS_SUCCESS';

export const getCurrentUser = (
  idToken,
  authState,
  authService
) => async dispatch => {
  if (authState.isAuthenticated) {
    authService
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
