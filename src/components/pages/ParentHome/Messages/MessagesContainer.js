import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import '../../../../styles/ParentStyles/messages.less';
import { getCurrentUser } from '../../../../redux/actions/userActions';
import { connect } from 'react-redux';

//TO-DO: Implement Auth0
function ParentMessages(props) {
  const { Content } = Layout;

  return (
    <Layout>
      <ParentSidebar />
      <Content className="content-container">
        <Banner />
        <Content className="component-container">
          <div className="card-container">
            <Card className="parent-message-card">
              <MessageList />
            </Card>
            <Card className="parent-message-card">
              <ActiveMessage />
            </Card>
          </div>
        </Content>
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    getCurrentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(ParentMessages);
