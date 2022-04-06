import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';
import InstructorSidebar from './InstructorSidebar';
import InstructorStats from './InstructorStats';

const { Content } = Layout;
const InstructorDashboard = () => {
  return (
    <div>
      <Layout>
        <Content>
          <InstructorSidebar />
          <InstructorStats />
          {/* Other Dashboard Components */}
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorDashboard;
