import axiosWithAuth from '../../utils/axiosWithAuth';

export const EDITING = 'EDITING';
export const ADD_COURSE = 'ADD_COURSE';
export const GET_COURSES = 'GET_COURSES';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const ERROR = 'ERROR';

export const setEditing = id => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
};

// api call; to be restored after BE overhaul
// export const getCourses = idToken => async dispatch => {
//   Promise.resolve().then(value=>{
//     axiosWithAuth(idToken).get(`/courses`)
//     .then(res=>{
//       dispatch({
//         type: GET_COURSES,
//         payload: res.data,
//       });
//     })
//     .catch(err=>{
//       dispatch({
//         type: ERROR,
//         payload: error.message,
//       });
//     })
//   })
// };

// stubbed out version; remove after BE overhaul
export const getCourses = () => {
  return { type: GET_COURSES, payload: [] };
};

// api call; to be restored after BE overhaul
// export const delCourse = (idToken, id) => async dispatch => {
//   try {
//     await axiosWithAuth(idToken).delete(`/courses/${id}`);
//     dispatch({
//       type: DELETE_COURSE,
//       payload: id,
//     });
//   } catch (error) {
//     dispatch({
//       type: ERROR,
//       payload: error.message,
//     });
//   }
// };

// stubbed out version; remove after BE overhaul
export const delCourse = () => {
  return {
    type: ERROR,
    payload: 'Please be patient while we overhaul the BE.',
  };
};

// api call; to be restored after BE overhaul
// export const editCourse = (idToken, course) => async dispatch => {
//   try {
//     const res = await axiosWithAuth(idToken).put(
//       `/courses/${course.course_id}`,
//       course
//     );
//     dispatch({
//       type: UPDATE_COURSE,
//       payload: res.data.course[0],
//     });
//   } catch (error) {
//     dispatch({
//       type: ERROR,
//       payload: error.message,
//     });
//   }
// };
// stubbed out version; remove after BE overhaul
export const editCourse = () => {
  return {
    type: ERROR,
    payload: 'Please be patient while we overhaul the BE.',
  };
};

// api call; to be restored after BE overhaul
// export const addCourse = (idToken, course) => async dispatch => {
//   axiosWithAuth(idToken)
//     .post('/course', course)
//     .then(res => {
//       dispatch({
//         type: ADD_COURSE,
//         payload: res.data.created_course,
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ERROR,
//         payload: err.message,
//       });
//     });
// };
// stubbed out version; remove after BE overhaul
export const addCourse = () => {
  return {
    type: ERROR,
    payload: 'Please be patient while we overhaul the BE.',
  };
};
