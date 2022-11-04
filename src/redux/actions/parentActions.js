import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
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

export const getChildren = (idToken, profile_id) => async dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  // axiosWithAuth(idToken)
  //   .get(`/parent/${profile_id}/children`)
  Promise.resolve({ data: [], message: '' })
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getCourses = dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  // axios
  //   .get(`${process.env.REACT_APP_API_URI}/course`)
  Promise.resolve({ data: [], message: '' })
    .then(res => {
      dispatch({ type: GET_COURSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const signupForCourse = () => dispatch => {
  dispatch({ type: SIGNUP_COURSE_ACTION });
  // axios
  //   .get(`${process.env.REACT_APP_API_URI}/children/:id/enrollments}`, {
  //     crossdomain: true,
  //   })
  Promise.resolve({ data: [], message: '' })
    .then(res => {
      dispatch({ type: SIGNUP_COURSE_ACTION, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const fetchBookings = () => dispatch => {
  dispatch({ type: FETCH_BOOKINGS_START });
  // axios
  //   .get(`${process.env.REACT_APP_API_URI}/parent/:profile_id/schedules`)
  Promise.resolve({ data: [], message: '' })
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

export const getNewsFeedsParent = idToken => dispatch => {
  try {
    // axiosWithAuth(idToken)
    //   .get('/news')
    Promise.resolve({ data: [], message: '' })
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
