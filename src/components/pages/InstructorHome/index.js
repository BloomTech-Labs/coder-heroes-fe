import React, { useState } from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import { Layout } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';
import Banner from '../../common/Banner';
import { Link } from 'react-router-dom';

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
          data-testid="sider"
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <InstructorSidebar />
        </Sider>
        <Layout>
          <Content>
            <Banner />

            <div className="calendar" data-testid="calendar">
              <InstructorCalender />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default InstructorHome;
