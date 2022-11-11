import React, { useState, useEffect } from 'react';

import RenderHomePage from './RenderHomePage';

//TO-DO: Implement Auth0
function HomeContainer() {
  return 'Hi, Need to Implement Auth0';
}

// //Can be used as template when Auth0 is implemented// //

// function HomeContainer({ LoadingComponent }) {
//   const [userInfo, setUserInfo] = useState(null);
//   // eslint-disable-next-line

//   useEffect(() => {
//     let isSubscribed = true;

//         // if user is authenticated we can use the authService to snag some user info.
//         // isSubscribed is a boolean toggle that we're using to clean up our useEffect.

//   return (
//     <>
//       {authState.isAuthenticated && !userInfo && (
//         <LoadingComponent message="Fetching user profile..." />
//       )}
//       {authState.isAuthenticated && userInfo && (
//         <RenderHomePage userInfo={userInfo} />
//       )}
//     </>
//   );
// }

export default HomeContainer;
