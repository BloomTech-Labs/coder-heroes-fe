export const ADD_COURSE = 'ADD_COURSE';
export const GET_COURSES = 'GET_COURSES';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';

export const getCourses = item => {
  return { type: GET_COURSES, payload: item };
};

export const delCourse = item => {
  return { type: UPDATE_COURSE, payload: item };
};

export const editCourse = item => {
  return { type: UPDATE_COURSE, payload: item };
};

export const addClass = item => {
  return { type: ADD_COURSE, payload: item };
};
