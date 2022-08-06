import axios from 'axios';

const axiosWithAuth = idToken => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: 'Bearer ' + idToken.idToken,
    },
  });
};

export default axiosWithAuth;
