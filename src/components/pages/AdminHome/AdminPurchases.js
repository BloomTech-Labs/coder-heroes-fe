import React, { useState, useEffect } from 'react';
import '../../../styles/index.less';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';

const { authState, oktaAuth } = useOktaAuth();
const { idToken } = authState;

const PurchasesList = () =>{
    const [purchases, setPurchases] = useState();
    useEffect(() => {
       axiosWithAuth(idToken).get("/admin-purchases")
        .then(res =>{
            setPurchases(res);
        })
        .catch(err => console.error(err));
}, []);
const { purchase_date, parent_username, seat_count, program_name, course_name } = purchases;

return (
    <div>
        <p>{purchase_date}</p>
        <p>{parent_username}</p>
        <p>{seat_count}</p>
        <p>{program_name}</p>
        <p>{course_name}</p>
    </div>
);
};
export default PurchasesList;