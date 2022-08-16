import React, { useEffect } from 'react';
import '../../../styles/InstructorStyles/index.less';
import { useOktaAuth } from '@okta/okta-react';
import { getCurrentUser } from '../../../redux/actions/userActions';
import AdminHome from '../AdminHome/index';
import InstructorHome from '../InstructorHome/index';
import ParentHome from '../ParentHome/ParentHome';

import { connect, useDispatch } from 'react-redux';

const InstructorDashboard = props => {
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const { idToken } = authState;
  const { role_id } = props.user.currentUser;

  useEffect(() => {
    if (!role_id) {
      dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
    }
  }, [dispatch, idToken]);

  switch (role_id) {
    case 1: // SuperAdmin
      return <AdminHome />;
    case 2: // Admin
      return <AdminHome />;
    case 3: // instructor
      return <InstructorHome />;
    case 4: // Parent
      return <ParentHome />;
    case 5: // Child
      return <ParentHome />; // ChildHome does not exist
    default:
      return console.log('Role_ID not Found');
  }
};

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps)(InstructorDashboard);
