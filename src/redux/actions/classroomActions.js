import axiosWithAuth from '../../utils/axiosWithAuth';

export const SET_COURSE_ID = 'SET_COURSE_ID';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_BADGES_BY_ID = 'GET_BADGES_BY_ID';
export const SET_CURRENT_STUDENT_ID = 'SET_CURRENT_STUDENT_ID';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';
export const GET_BADGES = 'GET_BADGES';
export const ADD_BADGE_TO_STUDENT = 'ADD_BADGE_TO_STUDENT';
export const REMOVE_BADGE_FROM_STUDENT = 'REMOVE_BADGE_FROM_STUDENT';

export const setCourseId = course_id => {
  return { type: SET_COURSE_ID, payload: course_id };
};

export const setCurrentStudentId = student_id => {
  return { type: SET_CURRENT_STUDENT_ID, payload: student_id };
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
export const getBadges = idToken => async dispatch => {
  dispatch({
    type: FETCHING,
    payload: true,
  });
  try {
    const res = await axiosWithAuth(idToken).get(`/classroom/badges/`);
    dispatch({
      type: GET_BADGES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: true,
    });
  }
};

export const getBadgesById = (idToken, student_id) => async dispatch => {
  dispatch({
    type: FETCHING,
    payload: true,
  });
  try {
    const res = await axiosWithAuth(idToken).get(
      `/classroom/badges/${student_id}`
    );
    dispatch({
      type: GET_BADGES_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: true,
    });
  }
};

export const addBadgeToStudent = (
  idToken,
  badge_id,
  student_id,
  badge
) => async dispatch => {
  dispatch({
    type: FETCHING,
    payload: true,
  });
  axiosWithAuth(idToken)
    .post(`/classroom/assign`, {
      badge_id: badge_id,
      child_id: student_id,
    })
    .then(() => {
      dispatch({
        type: ADD_BADGE_TO_STUDENT,
        payload: badge,
      });
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: true,
      });
    });
};

export const removeBadgeFromStudent = (
  idToken,
  badge_id,
  student_id,
  badge
) => async dispatch => {
  dispatch({
    type: FETCHING,
    payload: true,
  });
  try {
    axiosWithAuth(idToken)
      .delete(`/classroom/remove/${badge_id}/${student_id}`)
      .then(() => {
        dispatch({
          type: REMOVE_BADGE_FROM_STUDENT,
          payload: badge,
        });
      });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: true,
    });
  }
};
