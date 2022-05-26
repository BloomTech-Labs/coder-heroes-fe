import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/badges.less';
import { Layout } from 'antd';
import FeedbackBadge from './FeedbackBadge';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getBadgesById,
  getBadges,
} from '../../../redux/actions/classroomActions';

const { Content } = Layout;
const FeedbackBadgesPage = props => {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const { course } = props;

  useEffect(() => {
    dispatch(getBadgesById(idToken, course.currentStudentId));
    dispatch(getBadges(idToken));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getBadgesById(idToken, course.currentStudentId));
    }, 100);
    return () => clearTimeout(timer);
  }, [course.badge_request]);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="classroom__students">
            {course.badges.map(badge => (
              <FeedbackBadge
                badge={badge}
                key={badge.badge_id}
                studentBadges={course.studentBadges}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    course: state.classroomReducer,
  };
};

export default connect(mapStateToProps, { getBadgesById, getBadges })(
  FeedbackBadgesPage
);
