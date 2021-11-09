import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import ParentResources from './ParentResources';
import { dummyData } from '../../../dummyData';
import Button from '../../common/Button';
import { useHistory } from 'react-router';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import { ThunderboltFilled } from '@ant-design/icons';
=======
import './../../../styles/ParentStyles/index.less';
>>>>>>> 7fcbd5f (Added parent rescources and styled the structure of the parent dashboard)

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
<<<<<<< HEAD
      <Layout style={{ width: '100%' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ThunderboltFilled
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '5rem',
                padding: '25px 0px',
              }}
            />
          </div>
=======
      <Layout>
        <Sider width={150}>
>>>>>>> 7fcbd5f (Added parent rescources and styled the structure of the parent dashboard)
          <ParentSidebar />
        </Sider>
        <Content>
          <Button buttonText={'Booking'} handleClick={handleClick} />
          <Layout>
            <Content>
              <Row justify="space-around" align="middle">
                <Col span={5}>
                  <ParentResources />
                </Col>
                <Col span={15}>
                  <ParentCalendar schedule={scheduleData} />
                </Col>
              </Row>
            </Content>
          </Layout>
          <ChildrenList />
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
