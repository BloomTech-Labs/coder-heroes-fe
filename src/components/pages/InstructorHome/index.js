import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import CalendarApp from '../../common/calendar/Calendar';
import { Layout } from 'antd';

const { Content } = Layout;
const InstructorHome = () => {
  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="calendar" data-testid="calendar">
            <CalendarApp />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorHome;
