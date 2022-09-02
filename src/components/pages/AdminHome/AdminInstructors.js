import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import AdminInstructorCard from './AdminInstructorCard';

function AdminInstructors(props) {
  const { instructors } = props;
  const filtered = instructors.filter(
    instructor => instructor.status === 'false'
  );
  const [pending, setPending] = useState(true);
  const [displayed, setDisplayed] = useState(filtered);
  const dispatch = useDispatch();
  const idToken = useOktaAuth().oktaAuth.getIdToken();

  const ToggleInstructors = () => {
    if (pending) {
      setDisplayed(instructors);
      setPending(false);
    }
    if (!pending) {
      setDisplayed(filtered);
      setPending(true);
    }
  };

  useEffect(() => {
    dispatch(getInstructors(idToken));
  }, [dispatch, idToken]);

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div className="instruct-header-container">
          <div className="tgl-container">
            <button className="tgl-button" onClick={ToggleInstructors}>
              {!pending ? 'View Pending Applications' : 'View All Instructors'}
            </button>
          </div>
          <div className="instructor-card-container">
            {displayed.map(instructor => (
              <AdminInstructorCard
                key={instructor.instructor_id}
                name={
                  instructor.name /**currently no instructor name on the backend, this will probably need to change to instructor.instructor_name*/
                }
                bio={instructor.bio}
                status={instructor.status}
              />
            ))}
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
