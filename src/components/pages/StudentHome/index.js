import React, { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import StudentSideBar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import '../../../styles/ParentStyles/index.less';

function StudentHome() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="App">
      <Layout style={{ width: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          theme="light"
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
          <StudentSideBar />
        </Sider>
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
