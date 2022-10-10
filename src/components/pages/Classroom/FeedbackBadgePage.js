import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/badges.less';
import { Layout } from 'antd';
import FeedbackBadge from './FeedbackBadge';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getBadgesById,
  getBadges,
} from '../../../redux/actions/classroomActions';
//TO-DO: Implement Auth0

const { Content } = Layout;
const FeedbackBadgesPage = props => {
  const dispatch = useDispatch();

  const { course } = props;

  // useEffect(() => {
  // //   dispatch(getBadgesById(course.currentStudentId));
  // //   dispatch(getBadges(profile.id));
  // // }, [])


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(getBadgesById(course.currentStudentId));
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, [course.badge_request]);

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
