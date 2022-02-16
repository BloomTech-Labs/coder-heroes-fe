import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCESS_FETCH';
export const FAIL_FETCH = 'FAIL FETCH';
export const ADD_CLASS = 'ADD_CLASS';

export const fetchClasses = () => dispatch => {
  console.log('dispatched test');

  dispatch(startFetch());

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

export const addClass = item => {
  // axios.post("backend...", item)
  //     .then (resp =>{
  //         console.log('post success', resp);
  //     })
  //     .catch (resp =>{
  //         console.log('fail post:', resp);
  //     });
  //     return({type:ADD_CLASS, payload:item});
};
