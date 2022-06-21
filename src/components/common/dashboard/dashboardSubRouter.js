/** 
* A sub router responsible for rendering the proper components based on current route, AND the user role. 
*/

import React from "react";
import ROLE_CONFIG from "./config";

const DashboardSubRouter = props => {
    return (
        <>
            {Object.entries(ROLE_CONFIG[props.user.currentUser.role_id]).map(([route, config]) => {
                return (
                    <Route
                        key={route}
                        path={route}
                        component={config.component}
                    />
            })}
        </>
    );
};

export default DashboardSubRouter;