import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS';
export const ERROR_ACTION = 'ERROR';
export const POST_INBOX_ACTION = 'POST_INBOX_ACTION';
export const POST_INBOX_SUCCESS = 'POST_INBOX_SUCCESS';

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

export const addMessage = (
  idToken,
  message,
  recipient,
  profile_id,
  title
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

export const getInbox = dispatch => {
  dispatch({ type: GET_INBOX_ACTION, payload: dummyData.Messages });
};

const dummyData = {
  Messages: [
    {
      message: 'Hello World',
      sent_at: '2011-01-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 2,
      title: 'Hello World',
    },
    {
      message: 'Hello World2',
      sent_at: '2015-03-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 3,
      title: 'Hello World',
    },
    {
      message: 'Hello World3',
      sent_at: '2015-06-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: '4',
      title: 'Hello World',
    },
    {
      message: 'Hello World4',
      sent_at: '2015-03-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 5,
      title: 'Hello World',
    },
    {
      message: 'Hello World5',
      sent_at: '2016-01-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 6,
      title: 'Hello World',
    },
    {
      message: 'Hello World6',
      sent_at: '2016-01-21T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 7,
      title: 'Hello World',
    },
    {
      message: 'Hello World7',
      sent_at: '2016-02-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 8,
      title: 'Hello World',
    },
    {
      message: 'Hello World8',
      sent_at: '2016-07-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 9,
      title: 'Hello World',
    },
    {
      message: 'Hello World9',
      sent_at: '2016-04-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 10,
      title: 'Hello World',
    },
  ],
};
