import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';
import Button from '../../common/Button';
import { useHistory } from 'react-router';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { UserAddOutlined, ScheduleOutlined } from '@ant-design/icons';
import Banner from '../../common/Banner';

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
          <div className="banner-divs">
            <div className="enroll-child">
              <p>{<UserAddOutlined />} Enroll Child</p>
            </div>
            <div className="parent-find-courses">
              <p> {<ScheduleOutlined />} Find Courses</p>
            </div>
          </div>
          <ParentCalendar schedule={scheduleData} />
          <ChildrenList />
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
