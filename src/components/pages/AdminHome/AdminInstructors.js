import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getInstructors } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import AdminInstructorCard from './AdminInstructorCard';

const instructors = [];

for (let i = 0; i < 10; i++) {
  instructors.push({
    name: `test${i}`,
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur in pariatur. Deserunt ipsam distinctio quos? Quidem, nihil deleniti mollitia enim explicabo aliquam hic dolore nam dicta? Minus, distinctio eos.`,
    status: `${i % 2 == 0 ? 'true' : 'false'}`,
  });
}

function AdminInstructors(props) {
  // const { instructors } = props;
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
          <div className="button-container">
            <button className="toggle-button" onClick={ToggleInstructors}>
              {!pending ? 'View Pending Applications' : 'View All Instructors'}
            </button>
          </div>
          <div className="instructor-card-container">
            {displayed.map(instructor => (
              <AdminInstructorCard
                name={instructor.name}
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
