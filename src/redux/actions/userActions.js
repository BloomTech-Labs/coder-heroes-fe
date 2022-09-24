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
//TO-DO: Implement Auth0

export const getCurrentUser = profile_id => async dispatch => {
  if (profile_id) {
    axios
      .getUser()
      .then(parsedJWT => {
        axiosWithAuth(profile_id)
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

export const addMessage = (message, profile_id, title, sender_id) => {
  return {
    type: POST_INBOX_ACTION,
    payload: {
      message,
      sender_id: sender_id,
      title,
      profile_id: profile_id,
      sent_at: new Date(),
      read: false,
    },
  };
  // This endpoint is not working/not built yet
  //   axios
  //     .post(`${process.env.REACT_APP_API_URI}/conversation_id/messages/`, {
  //       message,
  //       sent_at: date.toISOString(),
  //       sender_id: profile_id,
  //       title: title,
  //       inbox_id: recipient,
  //       read: false,
  //       crossdomain: true,
  //     })
  //     .then(res => {
  //       dispatch({ type: POST_INBOX_SUCCESS, payload: res.data });
  //     })
  //     .catch(err => {
  //       dispatch({ type: ERROR_ACTION, payload: err });
  //     });
};

export const getInbox = dispatch => {
  dispatch({ type: GET_INBOX_ACTION });
  axios
    .get(`${process.env.REACT_APP_API_URI}/inbox/:profile_id`, {
      crossdomain: true,
    })
    .then(res => {
      dispatch({ type: GET_INBOX_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
