import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  ReadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const ParentSideBar = props => {
  const { cart } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <Sider
      data-testid="sider"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu defaultSelectedKeys={['dashboard']}>
        <Menu.Item
          key="coderheroes"
          icon={<ThunderboltFilled fontSize="150px" />}
          className="dashboard-logo"
        >
          Coderheroes
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<HomeFilled fontSize="150px" />}>
          <Link to="/parent">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="courses" icon={<CalendarFilled fontSize="150px" />}>
          <Link to="/parent-booking">Courses</Link>
        </Menu.Item>

        <Menu.Item key="family" icon={<HeartFilled fontSize="150px" />}>
          <Link to="/family">Family</Link>
        </Menu.Item>

        <Menu.Item key="setting" icon={<ToolFilled fontSize="150px" />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>

        <Menu.Item key="logout" icon={<ExportOutlined fontSize="150px" />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ReadOutlined />}>
          <Link to="/cart" className="link">
            Cart <span>{cart.length > 0 ? `(${cart.length})` : null}</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps)(ParentSideBar);
