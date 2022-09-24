import axiosWithAuth from '../../utils/axiosWithAuth';
export const ERROR_ACTION = 'ERROR_ACTION';
export const GET_CHILDREN_ACTION = 'GET_CHILDREN_ACTION';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_COURSES_ACTION = 'GET_COURSES_ACTION';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

//TO-DO: Implement axiosWithAuth once we've adjusted it to work with Auth0
export const getChildren = profile_id => dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  axios(profile_id)
    .get(`${process.env.REACT_APP_API_URI}/children`)
    .then(res => {
      dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};

export const getCourses = (profile_id, child_id) => dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  axios(profile_id)
    .get(`/children/${child_id}/enrollments`)
    .then(res => {
      dispatch({ type: GET_COURSES_SUCCESS, payload: res.data.enrollments });
    })
    .catch(err => {
      dispatch({ type: ERROR_ACTION, payload: err });
    });
};
