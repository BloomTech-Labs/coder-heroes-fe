import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const getCurrentUser = oktaID => dispatch => {
  axiosWithAuth()
    .get(`/profiles/${oktaID}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err.message);
    });
};
