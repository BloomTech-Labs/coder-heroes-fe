import axios from 'axios';

const axiosWithAuth = idToken => {
  // const parsedToken = JSON.parse(idToken);

  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
      // idToken is invalid, please fix it
      // Authorization: 'Bearer ' + idToken,

      // when idToken is fixed, please remove the following line
      Authorization:
        'Bearer eyJraWQiOiJjRUpLWkU1SlZLZWRXSnZPM1JLQmhacVpHQzQzUU1INXc0azI2YlEyRERBIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVsdHg3NGtNVW1FVzgwNTR4NiIsIm5hbWUiOiJUZXN0MDAzIFVzZXIiLCJlbWFpbCI6ImxsYW1hMDAzQG1haWxkcm9wLmNjIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2Rldi02MjUyNDQub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiIwb2Fsd285aWxmeTFNQzdRRTR4NiIsImlhdCI6MTY1OTc0NTMwNSwiZXhwIjoxNjU5NzQ4OTA1LCJqdGkiOiJJRC40QS1OQUpoT2VXbzNqVElqbl9aeEY0WmdiRFRibUhNV0E1TF9PaWpkcFNzIiwiYW1yIjpbInB3ZCJdLCJpZHAiOiIwMG9rdml6cGJPbUI3WTczWjR4NiIsIm5vbmNlIjoicU9IZEx0SkZUbHduZmFWdFVwcFhhQTJFTE9WQnFsa01zWGc5TU9DTEtQbmNpRzlXcTdDenJqT0drcTJWU3V4ayIsInByZWZlcnJlZF91c2VybmFtZSI6ImxsYW1hMDAzQG1haWxkcm9wLmNjIiwiYXV0aF90aW1lIjoxNjU5NzQ1MzA1LCJhdF9oYXNoIjoiNmo5ZWFzdHdfVU1WR2QxTTllLW5tUSJ9.Bta6z9ZsQ40AceGM-d5mCWYi3EloW-yuxyDXzchngfOHd0nsfIh-CZCn9ZU7sj4KCG8ZR527yscCLQ1bOpJJhMAF-P-iNhtFx9YjKlwTf7gDRuOb3thPUg-2HcXPvGCzXPqvM5L_Wkgz_rY6eOJ8LEg-71fr7VNOlzHKioqpT-8j2WHX1eKwYxPRalIeUz2Qf0zenMBZxr8tYfMJOmaG-FN0PeE6vNJmeXt-bvqC_ayOnqFGhu8zgEST10-0F_OrUOMNDV_kIgob2rpeBGbgzMGKYng23ehHMkl3e6fTiVLs6-tQsePdypWgBRfOJb-frEYKvkjjZNWkfFqoig0Xmw',
    },
  });
};

export default axiosWithAuth;
