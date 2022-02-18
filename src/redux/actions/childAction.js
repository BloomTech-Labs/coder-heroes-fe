import axiosWithAuth from '../../utils/axiosWithAuth';
export const ERROR_ACTION = 'ERROR_ACTION';
export const GET_CHILDREN_ACTION = 'GET_CHILDREN_ACTION';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_COURSES_ACTION = 'GET_COURSES_ACTION';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

export const getChildren = () => dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URI}/children`)
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getCourses = () => dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URI}/course`)
    .then(res => {
      dispatch({ type: GET_COURSES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
