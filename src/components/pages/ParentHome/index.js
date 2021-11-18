import React, { useState } from 'react';
import ParentCalendar from './ParentCalendar';
import { dummyData } from '../../../dummyData';
import { useHistory } from 'react-router';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import AvailableCourses from './AvailableCourses';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [scheduleData, setScheduleData] = useState(dummyData);
  const { push } = useHistory();
  const handleClick = () => {
    push('/');
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
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
          <ParentSidebar />
        </Sider>
        <Content>
          <Banner />
          <Layout>
            <Content>
              <Row justify="space-around" align="middle">
                <Col span={20}>
                  <AvailableCourses />
                </Col>
                <Col span={20}>
                  <ParentCalendar schedule={scheduleData} />
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
