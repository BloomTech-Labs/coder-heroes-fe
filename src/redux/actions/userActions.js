import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';

export const getCurrentUser = (
  idToken,
  authState,
  authService
) => async dispatch => {
  if (authState.isAuthenticated) {
    authService
      .getUser()
      .then(parsedJWT => {
        axiosWithAuth(idToken)
          .get(`/profiles/${parsedJWT.sub}`)
          .then(res => {
            dispatch({
              type: GET_CURRENT_USER,
              payload: res.data,
            });
          });
      })
      .catch(err => {
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  }
};
