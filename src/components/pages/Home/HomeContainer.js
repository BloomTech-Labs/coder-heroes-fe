import React, { useState, useEffect } from 'react';

import RenderHomePage from './RenderHomePage';

//TO-DO: Implement Auth0
<<<<<<< HEAD
function HomeContainer() {
=======
export default function HomeContainer() {
>>>>>>> 8354499 (Removing instances of Okta)
  return "Hi, Need to Implement Auth0";
}

// function HomeContainer({ LoadingComponent }) {
<<<<<<< HEAD
=======
//   // const { authState, oktaAuth } = useOktaAuth();
>>>>>>> 8354499 (Removing instances of Okta)
//   const [userInfo, setUserInfo] = useState(null);
//   // eslint-disable-next-line

//   useEffect(() => {
//     let isSubscribed = true;

<<<<<<< HEAD
//         // if user is authenticated we can use the authService to snag some user info.
//         // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
=======
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
>>>>>>> 8354499 (Removing instances of Okta)

//   return (
//     <>
//       {authState.isAuthenticated && !userInfo && (
//         <LoadingComponent message="Fetching user profile..." />
//       )}
//       {authState.isAuthenticated && userInfo && (
<<<<<<< HEAD
//         <RenderHomePage userInfo={userInfo} />
=======
//         <RenderHomePage userInfo={userInfo} authService={oktaAuth} />
>>>>>>> 8354499 (Removing instances of Okta)
//       )}
//     </>
//   );
// }

<<<<<<< HEAD
export default HomeContainer;
=======
// export default HomeContainer;
>>>>>>> 8354499 (Removing instances of Okta)
