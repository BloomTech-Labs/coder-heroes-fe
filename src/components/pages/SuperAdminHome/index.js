import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import SuperAdminSidebar from './SuperAdminSidebar';
import SuperAdminCalender from './SuperAdminCalender';
import { Layout } from 'antd';

const { Content } = Layout;
const adminHome = () => {
  return (
    <div>
      <Layout>
        <SuperAdminSidebar />
        <Content>
          <div className="calendar" data-testid="calendar">
            {/*Calendaer still set to Instructor Props*/}
            <SuperAdminCalender />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default adminHome;
