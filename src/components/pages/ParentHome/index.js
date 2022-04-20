import React, { useState } from 'react';
import ParentCalendar from './ParentCalendar';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import ParentSidebar from './ParentSidebar';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="App">
      <Layout style={{ width: '100%' }}>
        <ParentSidebar active="dashboard" />
        <Content>
          <Layout>
            <Content>
              <Row justify="space-around" align="middle">
                <Col span={24}>
                  <ParentCalendar />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
