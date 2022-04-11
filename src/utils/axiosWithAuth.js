import axios from 'axios';

const axiosWithAuth = idToken => {
  const parsedToken = JSON.parse(idToken);

  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: 'Bearer ' + parsedToken,
    },
  });
};

export default axiosWithAuth;
