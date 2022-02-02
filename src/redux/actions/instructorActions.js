// Declare Actions
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';//waiting for PR130
export const ERROR_ACTION = 'ERROR';
export const GET_USER_ACTION = 'GET_USERS';
export const GET_COURSES_ACTION = 'GET_COURSES';
export const GET_INBOX_ACTION = 'GET_INBOX';
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const ADD_COURSE_ACTION = 'ADD_COURSE';
export const ADD_NEW_PROGRAM = 'ADD_NEW_PROGRAM';
export const SET_ERROR = 'SET_ERROR';
export const GET_NEWSFEEDS = 'GET_NEWSFEEDS';

export const setSelectedCourse = course => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course,
  };
};

export const getusers = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`
    );
    dispatch({
      type: GET_USER_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};

export const getCourses = () => async dispatch => {
  try {
    const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`);
    dispatch({
      type: GET_COURSES_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
    });
  }
};

export const getInbox = () => async dispatch => {
  try {
    const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=10`);
    dispatch({
      type: GET_INBOX_ACTION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ACTION,
      payload: console.log(error),
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
      payload: console.log(error),
    });
  }
};

export const addProgram = newProgram => {
  //console.log(newProgram) I can store data here
  return dispatch => {
    dispatch(addNewProgram());
    // axios.post('endpoint', newProgram)
    //     .then(res =>{
    //         dispatch({type: FETCH_SUCCESS, payload: res.data})
    //     })
    //     .catch(error=>{
    //         dispatch({type: FETCH_FAIL, payload: error.response.data.Error})
    //     })
  };
};

export const addNewProgram = programs => {
  //console.log(programs) this is undefined for now as I am not posting to endpoint
  return {
    type: ADD_NEW_PROGRAM,
    payload: programs,
  };
};

export const setError = error => {
  return { type: SET_ERROR };
};

export const getNewsFeeds = token => dispatch => {
  try {
     //if the Pull request #130 get merged in you can use this axioswithAuth to make axios call instead of using straight axios
    //I had to make my own axioswithauth.js file since PR130 was not merged yet, but I made the path for the file same so it will work
    // but be sure to double check the import path for axiosWithAuth() after merge
    /* axiosWithAuth()
      .get('/news')
      .then(resp => {
        dispatch({
          type: GET_NEWSFEEDS,
          payload: resp.data,
        });
      })
      .catch(err => console.log(err)); */
    //axioswithauth code ends here
    axios
      .get(`${process.env.REACT_APP_API_URI}/news`, token)
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
      payload: console.log(error),
    });
  }
};
