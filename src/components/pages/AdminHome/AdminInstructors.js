import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import AdminPendingInstructors from './AdminPendingInstructors';
import AdminActiveInstructors from './AdminActiveInstructors';

function AdminInstructors(props) {
  const { instructors } = props;
  const dispatch = useDispatch();
  const idToken = useOktaAuth().oktaAuth.getIdToken();

  const ToggleInstructors = () => {
    dispatch(!instructors);
  };

  useEffect(() => {
    dispatch(getInstructors(idToken));
  }, [dispatch, idToken]);

  const history = useHistory();

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />

      <Content>
        <div className="header-container">
          <div className="button-container">
            <button className="toggle-button" onClick={ToggleInstructors}>
              {' '}
              {!instructors ? 'Pending Instructors' : 'Active Instructors'}{' '}
            </button>
            {instructors ? (
              <AdminPendingInstructors instructors={instructors} />
            ) : (
              <AdminActiveInstructors instructors={instructors} />
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    instructors: state.instructorReducer.instructors,
  };
};

export default connect(mapStateToProps, {})(AdminInstructors);
