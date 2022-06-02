import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import StudentSideBar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import '../../../styles/ParentStyles/index.less';

function StudentHome() {
  const { Content } = Layout;
  return (
    <div className="App">
      <Layout style={{ width: '100%' }}>
        <StudentSideBar />
        <Content>
          <Banner />
          <Layout>
            <Content>
              <StudentDashboard />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default StudentHome;
