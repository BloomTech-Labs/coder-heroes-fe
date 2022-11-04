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

export const getCourses = idToken => async dispatch => {
  // axiosWithAuth(idToken)
  // .get(`/courses`)
  Promise.resolve({ data: [], message: '' })
    .then(res => {
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    });
};

export const delCourse = (idToken, id) => async dispatch => {
  try {
    // await axiosWithAuth(idToken).delete(`/courses/${id}`);
    Promise.resolve({ data: { id: '' }, message: '' }).then(res => {
      dispatch({
        type: DELETE_COURSE,
        payload: res.data.id,
      });
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const editCourse = (idToken, course) => async dispatch => {
  try {
    // const res = await axiosWithAuth(idToken).put(
    //   `/courses/${course.course_id}`,
    //   course
    // );
    Promise.resolve({ data: { course: [] }, message: '' }).then(res => {
      dispatch({
        type: UPDATE_COURSE,
        payload: res.data.course[0],
      });
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const addCourse = (idToken, course) => async dispatch => {
  // axiosWithAuth(idToken)
  //   .post('/course', course)
  Promise.resolve({ data: { created_course: '' }, message: '' })
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
