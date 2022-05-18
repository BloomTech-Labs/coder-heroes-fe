import axiosWithAuth from '../../utils/axiosWithAuth';

export const SET_COURSE_ID = 'SET_COURSE_ID';
export const GET_STUDENTS = 'GET_STUDENTS';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';

export const setCourseId = course_id => {
  console.log('setting course_id:');
  return { type: SET_COURSE_ID, payload: course_id };
};

export const getStudents = (idToken, course_id) => async dispatch => {
  dispatch({
    type: FETCHING,
    payload: true,
  });
  try {
    const res = await axiosWithAuth(idToken).get(
      `/classroom/students/${course_id}`
    );
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: true,
    });
  }
};
