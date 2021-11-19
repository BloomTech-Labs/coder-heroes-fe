// Declare Actions
import axios from 'axios';

export const ERROR_ACTION = 'ERROR';
export const GET_USER_ACTION = 'GET_USERS';
export const GET_COURSES_ACTION = 'GET_COURSES';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const ADD_COURSE_ACTION = 'ADD_COURSE';

export const setSelectedCourse = course => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course,
  };
};

export const getusers = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`
    );
    dispatch({
      type: GET_USER_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};

export const getCourses = () => async dispatch => {
  try {
    const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`);
    dispatch({
      type: GET_COURSES_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};

export const getInbox = () => async dispatch => {
  try {
    const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`);
    dispatch({
      type: GET_INBOX_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};

export const addCourse = () => async dispatch => {
  try {
    const res = await axios.post(``);
    dispatch({
      type: ADD_COURSE_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};
