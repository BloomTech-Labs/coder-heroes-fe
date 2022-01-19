import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import AdminSidebar from './adminSidebar';
import adminCalender from './adminCalender';
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
            <adminCalender />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default adminHome;
