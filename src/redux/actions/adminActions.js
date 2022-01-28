import axios from 'axios';
export const ADMIN_ADD_COURSE_ACTION = 'ADMIN_ADD_COURSE';
export const ADMIN_ERROR_ACTION = 'ADMIN_ERROR';
export const addCourse = () => async dispatch => {
  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };
  axios
    .post(`https://coder-heroes-api.herokuapp.com/`, config)
    .then(resp => {
      console.log('redux admin add course', resp);
    })
    .catch(err => {
      console.log('error fetching newsfeed');
    });
};
// try {
//   const res = await axios.post(``);
//   dispatch({
//     type: ADMIN_ADD_COURSE_ACTION,
//     payload: res.data,
//   });
// } catch (error) {
//   dispatch({
//     type: ADMIN_ERROR_ACTION,
//     payload: console.log(error),
//   });
// }
