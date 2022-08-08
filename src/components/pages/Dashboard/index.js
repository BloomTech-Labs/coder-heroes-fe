import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'; // REMOVE MAYBE
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { getCurrentUser } from '../../../redux/actions/userActions';
import AdminHome from '../AdminHome/index';
import InstructorHome from '../InstructorHome/index';
import ParentHome from '../ParentHome/ParentHome';

import { connect, useDispatch } from 'react-redux';

const { Content } = Layout;

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
    case 1:
      return <AdminHome />;
      break; // REMOVE BREAKS;;
    case 2:
      return <InstructorHome />;
      break;
    case 3:
      return <ParentHome />;
      break;
  }
};

const mapStateToProps = state => {
  return { user: state.userReducer };
};

export default connect(mapStateToProps)(InstructorDashboard);

// <div>
//   <Layout>
//     <InstructorSidebar />
//     <Content>
//       <InstructorStats />
//       {/* Other Dashboard Components */}
//     </Content>
//   </Layout>
// </div>

/// REMOVEEEE&&&&^^^^
