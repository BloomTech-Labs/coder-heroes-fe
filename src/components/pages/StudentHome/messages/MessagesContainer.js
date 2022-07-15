import React from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import StudentSidebar from '../StudentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';

// possible location for styling component below
// import '../../../../styles/StudentStyles/messages.less';

function StudentMessages() {
  const { Content } = Layout;

  return (
    <Layout>
      <StudentSidebar />
      <Content className="content-container">
        <Banner />
        <Content className="component-container">
          <div className="card-container">
            <Card className="student-message-card">
              <MessageList />
            </Card>
            <Card className="student-message-card">
              <ActiveMessage />
            </Card>
          </div>
        </Content>
      </Content>
    </Layout>
  );
}

export default StudentMessages;
