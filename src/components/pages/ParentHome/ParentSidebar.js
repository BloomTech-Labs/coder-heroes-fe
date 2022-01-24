import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';

const { Sider } = Layout;

const ParentSideBar = props => {
  const { cart } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { authService } = useOktaAuth();
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
      <Menu
        className="parent-dashboard-sidebar"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
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

        <Menu.Item
          key="logout"
          icon={<ExportOutlined fontSize="150px" />}
          onClick={() => {
            authService.logout();
          }}
        >
          <Link>Logout</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<ShoppingCartOutlined fontSize="150px" />}>
          <Link to="/cart" className="link">
            Cart <span>({cart.length})</span>
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
