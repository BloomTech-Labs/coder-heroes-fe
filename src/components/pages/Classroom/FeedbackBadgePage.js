import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/badges.less';
import { Layout } from 'antd';
import FeedbackBadge from './FeedbackBadge';
import analytical from '../../../styles/ClassroomStyles/badges/analytical.png';
import artsy from '../../../styles/ClassroomStyles/badges/artsy.png';
import brave from '../../../styles/ClassroomStyles/badges/brave.png';
import coding from '../../../styles/ClassroomStyles/badges/coding.png';
import helped from '../../../styles/ClassroomStyles/badges/helped.png';
import helpful from '../../../styles/ClassroomStyles/badges/helpful.png';
import live from '../../../styles/ClassroomStyles/badges/live.png';
import solved from '../../../styles/ClassroomStyles/badges/solved.png';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { getStudents } from '../../../redux/actions/classroomActions';

const badges = [
  {
    id: 'a24efc',
    name: 'Analytical',
    image: analytical,
  },
  {
    id: 'a24efc',
    name: 'Artsy',
    image: artsy,
  },
  {
    id: 'a24efc',
    name: 'Brave',
    image: brave,
  },
  {
    id: 'a24efc',
    name: 'Coding',
    image: coding,
  },
  {
    id: 'a24efc',
    name: 'Helped',
    image: helped,
  },
  {
    id: 'a24efc',
    name: 'Helpful',
    image: helpful,
  },
  {
    id: 'a24efc',
    name: 'Live',
    image: live,
  },
  {
    id: 'a24efc',
    name: 'Solved',
    image: solved,
  },
];

const { Content } = Layout;
const FeedbackBadgesPage = () => {
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="classroom__students">
            {badges.map(badge => (
              <FeedbackBadge badge={badge} />
            ))}
          </div>
          <Button className="badge_feedback__button">GIVE FEEDBACK</Button>
        </Content>
      </Layout>
    </>
  );
};

export default connect(state => state, getStudents)(FeedbackBadgesPage);
