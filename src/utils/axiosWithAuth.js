import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('okta-token-storage');
  const parsedToken = JSON.parse(token);

  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      Authorization: 'Bearer ' + parsedToken.idToken.value,
    },
  });
};

export default axiosWithAuth;
