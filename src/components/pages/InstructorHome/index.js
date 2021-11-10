import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import InstructorProfile from './InstructorProfile';
import { Layout, Row, Col } from 'antd';
import { ThunderboltFilled } from '@ant-design/icons';

const { Content, Sider } = Layout;
const InstructorHome = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div>
      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ThunderboltFilled
              style={{
                textAlign: 'center',
                color: 'orange',
                fontSize: '5rem',
                padding: '25px 0px',
              }}
            />
          </div>
          <InstructorSidebar />
        </Sider>
        <Layout>
          <Content>
            <Row justify="space-around" align="middle">
              <Col span={12}>
                <InstructorCalender />
              </Col>
              <Col span={3}>
                <InstructorProfile />
              </Col>
              <Col span={1}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default InstructorHome;
