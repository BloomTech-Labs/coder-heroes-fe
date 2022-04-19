import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const EDITING = 'EDITING';
export const ADD_COURSE = 'ADD_COURSE';
export const GET_COURSES = 'GET_COURSES';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export const setEditing = id => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
};

export const getCourses = idToken => dispatch => {
  //   try {
  //     const res = await axiosWithAuth(idToken).get(`/courses`);
  //     dispatch({
  //       type: GET_COURSES,
  //       payload: res.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       payload: error.message,
  //     });
  //   }
  axiosWithAuth(idToken)
    .get('courses')
    .then(resp => {
      console.log(resp.data);
      dispatch({ type: GET_COURSES, payload: resp.data });
    });
};

export const delCourse = id => async dispatch => {
  try {
    await axios.delete(`/courses/${id}`);
    dispatch({
      type: DELETE_COURSE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      payload: error.message,
    });
  }
};

export const editCourse = id => async dispatch => {
  try {
    const res = await axios.put(`/courses/${id}`);
    dispatch({
      type: UPDATE_COURSE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      payload: error.message,
    });
  }
};

export const addCourse = course => async dispatch => {
  try {
    const res = await axios.post(`/courses`, course);
    dispatch({
      type: ADD_COURSE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      payload: error.message,
    });
  }
};
