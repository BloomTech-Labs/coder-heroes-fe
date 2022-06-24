import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS';
export const ERROR_ACTION = 'ERROR';
export const POST_INBOX_ACTION = 'POST_INBOX_ACTION';
export const POST_INBOX_SUCCESS = 'POST_INBOX_SUCCESS';
export const SET_ACTIVE_CONVERSATION = 'SET_ACTIVE_CONVERSATION';

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

export const getActiveConversation = activeConversation => {
  return { type: SET_ACTIVE_CONVERSATION, payload: activeConversation };
};

export const addMessage = (
  idToken,
  message,
  recipient,
  profile_id,
  title,
  sender_id
) => async dispatch => {
  dispatch({ type: POST_INBOX_ACTION });
  const date = new Date();
  axios
    .post(`${process.env.REACT_APP_API_URI}/conversation_id/messages/`, {
      message,
      sent_at: date.toISOString(),
      sender_id: profile_id,
      title: title,
      inbox_id: recipient,
      read: false,
      crossdomain: true,
    })
    .then(res => {
      dispatch({ type: POST_INBOX_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
