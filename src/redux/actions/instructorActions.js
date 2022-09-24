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
export const POST_NEWSFEED = 'POST_NEWSFEED';
export const PUT_NEWSFEED = 'PUT_NEWSFEED';
export const DELETE_NEWSFEED = 'DELETE_NEWSFEED';
export const GET_PROGRAMS = 'GET_PROGRAMS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const GET_INSTRUCTOR = 'GET_INSTRUCTOR';
export const SET_POST_ID = 'SET_POST_ID';
export const SET_POST_OPTIONS = 'SET_POST_OPTIONS';

//TO-DO: Implement axiosWithAuth once we've adjusted it to work with Auth0

export const setSelectedCourse = course => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course,
  };
};

export const getUser = profile_id => async dispatch => {
  axios(profile_id)
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

export const getCourses = profile_id => async dispatch => {
  try {
    const res = await axios(profile_id).get(`/instructor/courses`);
    const courses = res.data.map(course => {
      const now = Date.now();
      return { ...course, active: now < new Date(course.end_date).getTime() };
    });
    dispatch({
      type: GET_INSTRUCTOR_COURSES,
      payload: courses,
    });
    console.log(courses);
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: error.message,
    });
  }
};

export const getPrograms = profile_id => async dispatch => {
  axios(profile_id)
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

export const getNewsFeeds = profile_id => dispatch => {
  try {
    axios(profile_id)
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

export const getNewsFeed = (profile_id, postID) => dispatch => {
  try {
    axios(profile_id)
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

export const postNewsFeed = (profile_id, values) => dispatch => {
  try {
    axios(profile_id)
      .post(`/news/`, values)
      .then(resp => {
        dispatch({
          type: POST_NEWSFEED,
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

export const putNewsFeed = (profile_id, postID, formValues) => dispatch => {
  try {
    axios(profile_id)
      .put(`/news/${postID}`, formValues)
      .then(resp => {
        dispatch({
          type: PUT_NEWSFEED,
          payload: formValues,
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

export const deleteNewsFeed = (profile_id, postID, post) => dispatch => {
  try {
    axios(profile_id)
      .delete(`/news/${postID}`)
      .then(resp => {
        dispatch({
          type: DELETE_NEWSFEED,
          payload: post,
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

export const getInstructors = profile_id => async dispatch => {
  try {
    const res = await axios(profile_id).get(`profiles/role/3`);
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

export const getInstructor = (profile_id) => async dispatch => {
  try {
    const res = await axios(profile_id).get(
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

export const setPostID = (
  newsfeed_id,
  link,
  title,
  description,
  posted_at
) => async dispatch => {
  dispatch({
    type: SET_POST_ID,
    payload: {
      postID: newsfeed_id,
      link: link,
      title: title,
      description: description,
      posted_at: posted_at,
    },
  });
};

export const setPostOptions = postOptions => async dispatch => {
  dispatch({
    type: SET_POST_OPTIONS,
    payload: postOptions,
  });
};
