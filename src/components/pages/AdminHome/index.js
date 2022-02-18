import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import AdminSidebar from './AdminSidebar';
import AdminCalendar from './AdminCalendar';
import { Layout } from 'antd';
import Banner from '../../common/Banner';

const { Content } = Layout;

const AdminHome = () => {
  console.log('im in admin');
  return (
    <div>
      <Layout>
        <Content>
          <Banner />
          <AdminSidebar />
          <div className="calendar" data-testid="calendar">
            {/*Calendar still set to Instructor Props*/}
            <AdminCalendar />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default AdminHome;
