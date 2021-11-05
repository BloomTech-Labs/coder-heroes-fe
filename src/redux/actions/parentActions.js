import axios from 'axios';

export const ERROR_ACTION = 'ERROR';

export const GET_CHILDREN_ACTION = 'GET_CHILDREN';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';

export const GET_COURSES_ACTION = 'GET_COURSES';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

export const GET_SESSIONS_ACTION = 'GET_SESSIONS';
export const GET_SESSIONS_SUCCESS = 'GET_SESSIONS_SUCCESS';

export const GET_INBOX_ACTION = 'GET_INBOX';
export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS';

export const getChildren = () => dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getCourses = dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
    .then(res => {
      dispatch({ type: GET_COURSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getSessions = () => dispatch => {
  dispatch({ type: GET_SESSIONS_ACTION });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
    .then(res => {
      dispatch({ type: GET_SESSIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getInbox = dispatch => {
  dispatch({ type: GET_INBOX_ACTION });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca', {
      crossdomain: true,
    })
    .then(res => {
      dispatch({ type: GET_INBOX_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
