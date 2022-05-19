import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/badges.less';
import { Layout } from 'antd';
import FeedbackBadge from './FeedbackBadge';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { getBadgesById } from '../../../redux/actions/classroomActions';

const { Content } = Layout;
const FeedbackBadgesPage = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  useEffect(() => {
    props.getBadgesById(idToken, props.class.currentStudentId);
  }, []);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="classroom__students">
            {props.class.badges.map(badge => (
              <FeedbackBadge badge={badge} />
            ))}
          </div>
          <Button className="badge_feedback__button">GIVE FEEDBACK</Button>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    class: state.classroomReducer,
  };
};

export default connect(mapStateToProps, { getBadgesById })(FeedbackBadgesPage);
