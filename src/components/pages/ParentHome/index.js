import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';
import Button from '../../common/Button';
import { useHistory } from 'react-router';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { ThunderboltFilled } from '@ant-design/icons';

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
          <ParentSidebar />
        </Sider>
        <Content>
          <Button buttonText={'Booking'} handleClick={handleClick} />
          <ParentCalendar schedule={scheduleData} />
          <ChildrenList />
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
