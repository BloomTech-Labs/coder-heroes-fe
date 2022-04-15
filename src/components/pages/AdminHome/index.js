import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import AdminSidebar from './AdminSidebar';
import AdminCalendar from './AdminCalendar';
import { Layout } from 'antd';
import Banner from '../../common/Banner';

const { Content } = Layout;

const AdminHome = () => {
  return (
    <div>
      <Layout>
        <Content>
          <Banner />
          <AdminSidebar />
          <div className="calendar" data-testid="calendar">
            {/*Calendar still set to Instructor Props*/}
            <h1>Admin home</h1>
            <AdminCalendar />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default AdminHome;
