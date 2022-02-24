import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCESS_FETCH';
export const FAIL_FETCH = 'FAIL_FETCH';
export const ADD_CLASS = 'ADD_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

export const fetchClasses = () => dispatch => {
  console.log('dispatched test');

  dispatch(startFetch());

  // waiting for backend to implement this and reducer / actions
  // axios.get('backend...')
  //     .then(resp => {
  //         dispatch(successFetch(resp.data));
  //     })
  //     .catch(err => {
  //         dispatch(failFetch(setError));
  //     });
};

export const startFetch = () => {
  return { type: START_FETCH };
};

export const successFetch = aClass => {
  console.log('SuccessfulFetch Test:', aClass);
  return { type: SUCCESS_FETCH, payload: aClass };
};

export const failFetch = error => {
  return { type: FAIL_FETCH, payload: error };
};

export const delClass = item => {
  return { type: DELETE_CLASS, payload: item };
};

export const editClass = item => {
  return { type: EDIT_CLASS, payload: item };
};

export const addClass = item => {
  // waiting for backend to implement this and reducer / actions
  //
  // axios.post("backend...", item)
  //     .then (resp =>{
  //         console.log('post success', resp);
  //     })
  //     .catch (resp =>{
  //         console.log('fail post:', resp);
  //     });
  //     return({type:ADD_CLASS, payload:item});

  return { type: ADD_CLASS, payload: item };
};
