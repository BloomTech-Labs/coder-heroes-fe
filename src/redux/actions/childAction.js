import axiosWithAuth from '../../utils/axiosWithAuth';
export const ERROR_ACTION = 'ERROR_ACTION';
export const GET_CHILDREN_ACTION = 'GET_CHILDREN_ACTION';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_COURSES_ACTION = 'GET_COURSES_ACTION';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

// stubbed

export const getChildren = idToken => dispatch => {
  dispatch({ type: GET_CHILDREN_ACTION });
  // Promise.resolve({
  //   child: {
  //     child_id: 0,
  //     profile_id: 0,
  //     username: '',
  //     age: 0,
  //     parent_id: 0,
  //   },
  // })
  // .then(value=>{
  //   axiosWithAuth(idToken)
  //   .get(`${process.env.REACT_APP_API_URI}/children`)
  //   .then(res => {
  //     dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data || value});
  //   })
  //   .catch(err => {
  //     dispatch({ type: ERROR_ACTION, payload: err });
  //   });
  // })
};

export const getCourses = (idToken, child_id) => dispatch => {
  dispatch({ type: GET_COURSES_ACTION });
  // Promise.resolve({ courses: {} }).then(value=>{
  //   axiosWithAuth(idToken)
  //   .get(`/children/${child_id}/enrollments`)
  //   .then(res => {
  //     dispatch({ type: GET_COURSES_SUCCESS, payload: res.data.enrollments || value});
  //   })
  //   .catch(err => {
  //     dispatch({ type: ERROR_ACTION, payload: err });
  //   });
  // });
};
