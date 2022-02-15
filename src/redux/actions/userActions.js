import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const getCurrentUser = oktaID => dispatch => {
  axiosWithAuth()
    .get(`/profiles/${oktaID}`)
    .then(res => {
      dispatch({ type: GET_CURRENT_USER, payload: res.data });
    })
    .catch(err => {
      console.error(err.message);
    });
};
