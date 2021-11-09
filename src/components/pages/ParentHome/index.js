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
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content, Sider } = Layout;
  const [scheduleData, setScheduleData] = useState(dummyData);
  const { push } = useHistory();

  const handleClick = () => {
    push('/');
  };
  return (
    <div className="App">
      <Layout>
        <Sider width={150}>
          <ParentSidebar />
        </Sider>
        <Content style={{ padding: '15px' }}>
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
