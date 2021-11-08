import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';
import Button from '../../common/Button';
import { useHistory } from 'react-router';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

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
        <Sider width={250}>
          <ParentSidebar />
        </Sider>
        <Content style={{ padding: '15px' }}>
          <Button buttonText={'Booking'} handleClick={handleClick} />
          <ParentCalendar schedule={scheduleData} />
          <ChildrenList />
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
