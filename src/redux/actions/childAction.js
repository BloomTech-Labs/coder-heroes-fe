// import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
export const ERROR_ACTION = 'ERROR_ACTION';
export const GET_CHILDREN_ACTION = 'GET_CHILDREN_ACTION';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_COURSES_ACTION = 'GET_COURSES_ACTION';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

// stubbed

export const getChildren = idToken => dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  // axiosWithAuth(idToken)
  //   .get(`${process.env.REACT_APP_API_URI}/children`)
  Promise.resolve({ data: [], message: '' })
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getCourses = (profile_id, child_id) => dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  // axiosWithAuth(idToken)
  // .get(`/children/${child_id}/enrollments`)
  Promise.resolve({ data: { enrollments: [] }, message: '' })
    .then(res => {
      dispatch({ type: GET_COURSES_SUCCESS, payload: res.data.enrollments });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
