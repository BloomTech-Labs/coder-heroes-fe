import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import { Layout } from 'antd';

const { Content } = Layout;
const InstructorHome = () => {
  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="calendar" data-testid="calendar">
            <InstructorCalender />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorHome;
