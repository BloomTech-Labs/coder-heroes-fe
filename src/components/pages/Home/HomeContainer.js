import React, { useState, useEffect } from 'react';

import RenderHomePage from './RenderHomePage';

//TO-DO: Implement Auth0
export default function HomeContainer() {
  return "Hi, Need to Implement Auth0";
}

// function HomeContainer({ LoadingComponent }) {
//   // const { authState, oktaAuth } = useOktaAuth();
//   const [userInfo, setUserInfo] = useState(null);
//   // eslint-disable-next-line

//   useEffect(() => {
//     let isSubscribed = true;

//     oktaAuth
//       .getUser()
//       .then(info => {
//         // if user is authenticated we can use the authService to snag some user info.
//         // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
//         if (isSubscribed) {
//           setUserInfo(info);
//         }
//       })
//       .catch(err => {
//         isSubscribed = false;
//         return setUserInfo(null);
//       });
//     return () => (isSubscribed = false);
//   }, [authState, oktaAuth]);

//   return (
//     <>
//       {authState.isAuthenticated && !userInfo && (
//         <LoadingComponent message="Fetching user profile..." />
//       )}
//       {authState.isAuthenticated && userInfo && (
//         <RenderHomePage userInfo={userInfo} authService={oktaAuth} />
//       )}
//     </>
//   );
// }

// export default HomeContainer;
