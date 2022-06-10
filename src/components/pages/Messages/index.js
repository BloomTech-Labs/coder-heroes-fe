import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';

const { Content } = Layout;
const Messages = () => {
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <h3>This is where all the Messages will show up</h3>
        </Content>
      </Layout>
    </>
  );
};

export default Messages;
