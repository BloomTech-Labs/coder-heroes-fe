import React, { useState } from 'react';
import StudentDropdown from './StudentDropdown';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  ClockCircleOutlined,
  GiftOutlined,
  FundProjectionScreenOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
//import { useOktaAuth } from '@okta/okta-react';

const ParentNavbar = props => {
  const [collapsed] = useState(false);

  // const { authService } = useOktaAuth();
  // const onCollapse = () => {
  //   if (collapsed === true) {
  //     setCollapsed(false);
  //   } else {
  //     setCollapsed(true);
  //   }
  // };

  return (
    <div className="parent-navbar-container">
      <Menu
        className="parent-navbar"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '8vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="progress"
          icon={<ClockCircleOutlined fontSize="150px" />}
        >
          <Link to="/parent/progress">Progress</Link>
        </Menu.Item>
        <Menu.Item key="achievements" icon={<GiftOutlined fontSize="150px" />}>
          <Link to="/parent/achievements">Achievements</Link>
        </Menu.Item>
        <Menu.Item
          key="tasks"
          icon={<UnorderedListOutlined fontSize="150px" />}
        >
          <Link to="/parent/tasks">Tasks</Link>
        </Menu.Item>
        <Menu.Item
          key="resources"
          icon={<FundProjectionScreenOutlined fontSize="150px" />}
        >
          <Link to="/parent/resources">Resources</Link>
        </Menu.Item>
      </Menu>
      <StudentDropdown className="dropStudent" />
    </div>
  );
};

export default ParentNavbar;
