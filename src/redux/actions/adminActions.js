import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESS_FETCH = 'SUCESS_FETCH';
export const FAIL_FETCH = 'FAIL_FETCH';
export const ADD_CLASS = 'ADD_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

// waiting for backend to implement this and reducer / actions
//
// const token = JSON.parse(localStorage.getItem('okta-token-storage'));
// const config = {
//   headers: { Authorization: `Bearer ${token.idToken.value}` },
// };
// const body = {
//   ...formValues,
//   class_name: formValues.class_name,
//   class_subject: formValues.class_subject,
//   class_desc: formValues.class_desc,
//   class_prereq_list: formValues.prereq,
// };

// waiting for backend to implement this and reducer / actions
//
// axios
//   .post(`https://coder-heroes-api.herokuapp.com/course_types`, body, config)
//   .then(resp => {
//     console.log('axiosCall', resp);
//   })
//   .catch(err => {
//     console.error(err);
//   });

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
