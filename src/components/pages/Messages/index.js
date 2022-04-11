import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import Messages from './Messages';
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';

const { Content } = Layout;
const MessagesPage = () => {
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Messages />
        </Content>
      </Layout>
    </>
  );
};

export default MessagesPage;
