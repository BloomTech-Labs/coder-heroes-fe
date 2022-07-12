import React from 'react';
import Banner from '../../../common/Banner';
import StudentSidebar from '../StudentSidebar';
import StudentProgressBar from './StudentProgressBar';

// Possible location for Student styling if necessary
// import '../../../styles/StudentStyles/index.less';

import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';

const StudentProgress = () => {
  const { Content } = Layout;

  return (
    <Layout style={{ width: '100%' }}>
      <StudentSidebar active="dashboard" />
      <Content>
        <Banner />
        <StudentProgressBar />
      </Content>
    </Layout>
  );
};

export default StudentProgress;
