// Declare Actions
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const GET_INSTRUCTORS = 'GET_INSTRUCTORS';
export const ERROR_ACTION = 'ERROR';
export const GET_USER_ACTION = 'GET_USER';
export const GET_INSTRUCTOR_COURSES = 'GET_INSTRUCTOR_COURSES';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const ADD_COURSE_ACTION = 'ADD_COURSE';
export const ADD_NEW_PROGRAM = 'ADD_NEW_PROGRAM';
export const SET_ERROR = 'SET_ERROR';
export const GET_NEWSFEEDS = 'GET_NEWSFEEDS';
export const GET_NEWSFEED = 'GET_NEWSFEED';
export const PUT_NEWSFEED = 'PUT_NEWSFEED';
export const DELETE_NEWSFEED = 'DELETE_NEWSFEED';
export const GET_PROGRAMS = 'GET_PROGRAMS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_INSTRUCTOR = 'GET_INSTRUCTOR';
export const SET_POST_ID = 'SET_POST_ID';
export const SET_POST_OPTIONS = 'SET_POST_OPTIONS';
export const setSelectedCourse = course => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course,
  };
};
export const getUser = idToken => async dispatch => {
  axiosWithAuth(idToken)
    .get('/user')
    .then(res => {
      dispatch({
        type: GET_USER_ACTION,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR_ACTION,
        payload: err.message,
      });
    });
};
export const getCourses = idToken => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(`/instructor/courses`);
    const courses = res.data.map(course => {
      const now = Date.now();
      return { ...course, active: now < new Date(course.end_date).getTime() };
    });
    dispatch({
      type: GET_INSTRUCTOR_COURSES,
      payload: courses,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
export const getPrograms = idToken => async dispatch => {
  axiosWithAuth(idToken)
    .get('/programs')
    .then(res => {
      dispatch({
        type: GET_PROGRAMS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR_ACTION,
        payload: err.message,
      });
    });
};
export const getInbox = () => async dispatch => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URI}/inbox/:profile_id`
    );
    dispatch({
      type: GET_INBOX_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
export const addCourse = () => async dispatch => {
  try {
    const res = await axios.post(``);
    dispatch({
      type: ADD_COURSE_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};
export const addProgram = newProgram => {
  return dispatch => {
    dispatch(addNewProgram());
    axios
      .post(`${process.env.REACT_APP_API_URI}/program`, newProgram)
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_FAIL, payload: error.response.data.Error });
      });
  };
};
export const addNewProgram = programs => {
  return {
    type: ADD_NEW_PROGRAM,
    payload: programs,
  };
};
export const setError = error => {
  return { type: SET_ERROR };
};

export const getNewsFeeds = idToken => dispatch => {
  try {
    axiosWithAuth(idToken)
      .get('/news')
      .then(resp => {
        dispatch({
          type: GET_NEWSFEEDS,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const getNewsFeed = (idToken, postID) => dispatch => {
  try {
    axiosWithAuth(idToken)
      .get(`/news/${postID}`)
      .then(resp => {
        dispatch({
          type: GET_NEWSFEED,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const putNewsFeed = (idToken, postID) => dispatch => {
  try {
    axiosWithAuth(idToken)
      .put(`/news/${postID}`)
      .then(resp => {
        dispatch({
          type: GET_NEWSFEED,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const deleteNewsFeed = (idToken, postID) => dispatch => {
  try {
    axiosWithAuth(idToken)
      .delete(`/news/${postID}`)
      .then(resp => {
        dispatch({
          type: GET_NEWSFEED,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err));
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const getInstructors = idToken => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(`profiles/role/3`);
    dispatch({
      type: GET_INSTRUCTORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const getInstructor = (idToken, profile_id) => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(
      `instructor/profile/${profile_id}`
    );
    dispatch({
      type: GET_INSTRUCTOR,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const setPostID = postID => async dispatch => {
  dispatch({
    type: SET_POST_ID,
    payload: postID,
  });
};

export const setPostOptions = postOptions => async dispatch => {
  dispatch({
    type: SET_POST_OPTIONS,
    payload: postOptions,
  });
};
