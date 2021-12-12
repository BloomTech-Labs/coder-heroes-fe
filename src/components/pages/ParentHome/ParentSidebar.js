import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
} from '@ant-design/icons';

function ParentSidebar(props) {
  const { collapsed } = props;

  const handleClick = e => {
    console.log('click ', e);
  };

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  function openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  return (
    <div>
      <Menu
        className="parent-dashboard-sidebar"
        onClick={handleClick}
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '300vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        {/* <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a> */}

        <Menu.Item key="2" className="closebtn" onclick="closeNav()">
          X
        </Menu.Item>
        <Menu.Item
          key="1"
          className="dashboard-logo"
          icon={<ThunderboltFilled style={{ fontSize: '150%' }} />}
        >
          {' '}
          CoderHeroes
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeFilled style={{ fontSize: '150%' }} />}>
          <Link to="/parent" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<HeartFilled style={{ fontSize: '150%' }} />}>
          <Link to="/" className="link">
            {' '}
            ** Family
          </Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<CalendarFilled style={{ fontSize: '150%' }} />}
        >
          <Link to="/parent-booking" className="link">
            Booking
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ToolFilled style={{ fontSize: '150%' }} />}>
          <Link to="/settings" className="link">
            {' '}
            ** Settings
          </Link>
        </Menu.Item>

        <Menu.Item
          key="4"
          icon={<ExportOutlined style={{ fontSize: '150%' }} />}
        >
          <Link to="/logout" className="link">
            {' '}
            ** Logout
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default ParentSidebar;

// ** means that routes for "settings", "family (which is renders a list of children that belong to that parent. the endpoint might be localhost:3000/parent_id/child or something like that), Logout ( I know the logout functionality is working, I just dont know how to connect to it) are missing. Can we address that or let me know so I can remove.
