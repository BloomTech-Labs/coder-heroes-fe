import axios from 'axios';

//TO-DO: Implement Auth0
const axiosWithAuth = idToken => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    // headers: {
    //   Authorization: 'Bearer ' + idToken,
    // },
  });
};

export default axiosWithAuth;
