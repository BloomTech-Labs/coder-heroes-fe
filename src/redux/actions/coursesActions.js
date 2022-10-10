// import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

export const EDITING = 'EDITING';
export const ADD_COURSE = 'ADD_COURSE';
export const GET_COURSES = 'GET_COURSES';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const ERROR = 'ERROR';

//TO-DO: Implement axiosWithAuth once we've adjusted it to work with Auth0

export const setEditing = id => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
};

export const getCourses = profile_id => async dispatch => {
  try {
    const res = await axios(profile_id).get(`/courses`);
    dispatch({
      type: GET_COURSES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const delCourse = (profile_id, id) => async dispatch => {
  try {
    await axios(profile_id).delete(`/courses/${id}`);
    dispatch({
      type: DELETE_COURSE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const editCourse = (profile_id, course) => async dispatch => {
  try {
    const res = await axios(profile_id).put(
      `/courses/${course.course_id}`,
      course
    );
    dispatch({
      type: UPDATE_COURSE,
      payload: res.data.course[0],
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const addCourse = (profile_id, course) => async dispatch => {
  axios(profile_id)
    .post('/course', course)
    .then(res => {
      dispatch({
        type: ADD_COURSE,
        payload: res.data.created_course,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    });
};
