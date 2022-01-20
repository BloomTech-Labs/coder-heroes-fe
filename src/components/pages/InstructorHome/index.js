import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import { Layout } from 'antd';
import Banner from '../../common/Banner';
import InstructorNewsfeed from '../Newsfeed/InstructorNewsfeed'
const { Content } = Layout;
const InstructorHome = () => {
  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          <div className="calendar" data-testid="calendar">
      <InstructorNewsfeed/>
            <InstructorCalender />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorHome;
