import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../../common/Banner';
import ParentSidebar from '../ParentSidebar';
import ActiveMessage from './ActiveMessage';
import MessageList from './MessageList';
import '../../../../styles/ParentStyles/messages.less';
import { getCurrentUser } from '../../../../redux/actions/userActions';
import { useOktaAuth } from '@okta/okta-react';
import { connect, useDispatch } from 'react-redux';

function ParentMessages(props) {
  const { Content } = Layout;
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});
  const { authState, oktaAuth } = useOktaAuth();
  useEffect(() => {
    if (authState !== null) {
      if (authState.isAuthenticated !== false) {
        dispatch(getCurrentUser(authState.idToken.idToken, oktaAuth));
      }
    }
  }, []);
  useLayoutEffect(() => {
    setCurrentUser(props.currentUser);
  }, [props.currentUser]);
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
