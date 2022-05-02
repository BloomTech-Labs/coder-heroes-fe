// Declare Actions
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const ERROR_ACTION = 'ERROR';
export const GET_USER_ACTION = 'GET_USERS';
export const GET_INSTRUCTOR_COURSES = 'GET_INSTRUCTOR_COURSES';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const ADD_COURSE_ACTION = 'ADD_COURSE';
export const ADD_NEW_PROGRAM = 'ADD_NEW_PROGRAM';
export const SET_ERROR = 'SET_ERROR';
export const GET_NEWSFEEDS = 'GET_NEWSFEEDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_INSTRUCTOR = 'GET_INSTRUCTOR';
export const setSelectedCourse = course => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course,
  };
};
export const getusers = () => async dispatch => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URI}/user`);
    dispatch({
      type: GET_USER_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
export const getCourses = idToken => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(`/instructor/courses`);
    const courses = res.data.map(course => {
      const now = Date.now();
      return { ...course, active: now < new Date(course.end_date).getTime() };
    });
    dispatch({
      type: GET_INSTRUCTOR_COURSES,
      payload: courses,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
export const getInbox = () => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URI}/inbox/:profile_id`
    );
    dispatch({
      type: GET_INBOX_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
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
      payload: error.message,
    });
  }
};
export const addProgram = newProgram => {
  return dispatch => {
    dispatch(addNewProgram());
    axios
      .post(`${process.env.REACT_APP_API_URI}/program`, newProgram)
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_FAIL, payload: error.response.data.Error });
      });
  };
};
export const addNewProgram = programs => {
  return {
    type: ADD_NEW_PROGRAM,
    payload: programs,
  };
};
export const setError = error => {
  return { type: SET_ERROR };
};

export const getNewsFeeds = idToken => dispatch => {
  try {
    axiosWithAuth(idToken)
      .get('/news')
      .then(resp => {
        dispatch({
          type: GET_NEWSFEEDS,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const getInstructor = (idToken, profile_id) => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(
      `instructor/profile/${profile_id}`
    );
    dispatch({
      type: GET_INSTRUCTOR,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
