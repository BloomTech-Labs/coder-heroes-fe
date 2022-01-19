import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import AdminSidebar from './adminSidebar';
import AdminCalender from './adminCalender';
import { Layout } from 'antd';
import Banner from '../../common/Banner';

const { Content } = Layout;
const adminHome = () => {
  return (
    <div>
      <Layout>
        <AdminSidebar />
        <Content>
          <Banner />
          <div className="calendar" data-testid="calendar">
            {/*Calendaer still set to Instructor Props*/}
            <AdminCalender />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default adminHome;
