import React, { useEffect } from 'react';
<<<<<<< HEAD
import '../../../styles/InstructorStyles/index.less';
=======
import { Redirect } from 'react-router-dom';
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';
>>>>>>> 52a78ed (BL-650 created dashboard component that conditionally renders based on role_id. Login Functionality needs to be reworked does not update user info on login and redirects to the same route on login)
import { useOktaAuth } from '@okta/okta-react';
import { getCurrentUser } from '../../../redux/actions/userActions';
import AdminHome from '../AdminHome/index';
import InstructorHome from '../InstructorHome/index';
import ParentHome from '../ParentHome/ParentHome';
<<<<<<< HEAD

import { connect, useDispatch } from 'react-redux';
=======

import { connect, useDispatch } from 'react-redux';

const { Content } = Layout;
>>>>>>> 52a78ed (BL-650 created dashboard component that conditionally renders based on role_id. Login Functionality needs to be reworked does not update user info on login and redirects to the same route on login)

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
<<<<<<< HEAD
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
=======
    case 1:
      return <AdminHome />;
      break;
    case 2:
      return <InstructorHome />;
      break;
    case 3:
      return <ParentHome />;
      break;
>>>>>>> 52a78ed (BL-650 created dashboard component that conditionally renders based on role_id. Login Functionality needs to be reworked does not update user info on login and redirects to the same route on login)
  }
};

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps)(InstructorDashboard);
<<<<<<< HEAD
=======

// <div>
//   <Layout>
//     <InstructorSidebar />
//     <Content>
//       <InstructorStats />
//       {/* Other Dashboard Components */}
//     </Content>
//   </Layout>
// </div>
>>>>>>> 52a78ed (BL-650 created dashboard component that conditionally renders based on role_id. Login Functionality needs to be reworked does not update user info on login and redirects to the same route on login)
