import axiosWithAuth from '../../utils/axiosWithAuth';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';

export const getCurrentUser = idToken => async dispatch => {
  try {
    const res = await axiosWithAuth(idToken).get(`/profiles/${idToken}`);
    dispatch({
      type: GET_CURRENT_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.message,
    });
  }
};
