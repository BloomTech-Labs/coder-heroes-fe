import axios from 'axios';
//TO-DO: Implement Auth0

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

// const getAuthHeader = authState => {
//   if (!authState.isAuthenticated) {
//     throw new Error('Not authenticated');
//   }
//   return 'hi';

// };

const getDSData = url => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url)
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

// const apiAuthGet = authHeader => {
//   return axios.get(apiUrl, { headers: authHeader });
// };

const getProfileData = () => {
  try {
    return 'Hi, need to Implement Auth0';
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export { sleep, getExampleData, getProfileData, getDSData };
