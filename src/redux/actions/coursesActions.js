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

export const getCourses = idToken => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(`/courses`);
    dispatch({
      type: GET_COURSES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      payload: error.message,
    });
  }
};

export const delCourse = (idToken, id) => async dispatch => {
  try {
    await axiosWithAuth(idToken).delete(`/courses/${id}`);
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

export const editCourse = (idToken, course) => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).put(
      `/courses/${course.course_id}`,
      course
    );
    dispatch({
      type: UPDATE_COURSE,
      payload: res.data.course[0],
    });
  } catch (error) {
    dispatch({
      payload: error.message,
    });
  }
};
const mock = {
  course_name: 'App Building Fundamentals 3',
  course_description:
    'A month-long course where students with design, build, and deploy an app from beginning to end!',
  days_of_week: ['Monday'],
  max_size: 20,
  min_age: 7,
  max_age: 12,
  instructor_id: 1,
  program_id: 1,
  start_time: '08:00:00',
  end_time: '12:30:00',
  start_date: '2022-04-04T04:00:00.000Z',
  end_date: '2022-04-28T04:00:00.000Z',
  location: "Children's Coding Center",
  number_of_sessions: 4,
  program_name: 'Codercamp',
};

export const addCourse = (idToken, course) => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).post(`/courses`, mock);
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
