import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';//waiting for PR130
export const ERROR_ACTION = 'ERROR';
export const GET_CHILDREN_ACTION = 'GET_CHILDREN';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_COURSES_ACTION = 'GET_COURSES';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_SESSIONS_ACTION = 'GET_SESSIONS';
export const GET_SESSIONS_SUCCESS = 'GET_SESSIONS_SUCCESS';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const GET_INBOX_SUCCESS = 'GET_INBOX_SUCCESS';
export const SIGNUP_COURSE_ACTION = 'SIGNUP_COURSE';
export const SIGNUP_COURSE_SUCCESS = 'SIGNUP_SUCCESS';

export const FETCH_BOOKINGS_START = 'FETCH_BOOKINGS_START';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CANCEL_CART_ITEM = 'CANCEL_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const GET_NEWSFEEDS_PARENT = 'GET_NEWSFEEDS_PARENT';
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
export const signupForCourse = () => dispatch => {
  dispatch({ type: SIGNUP_COURSE_ACTION });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca', {
      crossdomain: true,
    })
    .then(res => {
      dispatch({ type: SIGNUP_COURSE_ACTION, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const fetchBookings = () => dispatch => {
  dispatch({ type: FETCH_BOOKINGS_START });
  axios
    .get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca')
    .then(res => {
      dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_BOOKINGS_FAILURE, payload: err });
    });
};

export const addToCart = booking => dispatch => {
  return dispatch({ type: ADD_TO_CART, payload: booking });
};

export const cancelCartItem = booking => dispatch => {
  return dispatch({ type: CANCEL_CART_ITEM, payload: booking });
};

export const clearCart = () => dispatch => {
  return dispatch({ type: CLEAR_CART });
};

export const getNewsFeedsParent = token => dispatch => {
  try {
    //if the Pull request #130 get merged in you can use this axioswithAuth to make axios call instead of using straight axios
    //I had to make my own axioswithauth.js file since PR130 was not merged yet, but I made the path for the file same so it will work
    //and token can be removed from export const getNewsFeedsParent = ()=>dispatch=>{...
    // but be sure to double check the import path for axiosWithAuth() after merge
    /* axiosWithAuth()
      .get('/news')
      .then(resp => {
        dispatch({
          type: GET_NEWSFEEDS_PARENT,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err)); */
    //axioswithauth code ends here
    axios
      .get(`${process.env.REACT_APP_API_URI}/news`, token)
      .then(resp => {
        dispatch({
          type: GET_NEWSFEEDS_PARENT,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};