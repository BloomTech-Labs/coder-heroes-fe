import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  HomeOutlined,
  ThunderboltFilled,
  ReadOutlined,
} from '@ant-design/icons';

function ParentSidebar(props) {
  const { collapsed, cart } = props;

  const handleClick = e => {
    return null;
  };

  return (
    <div>
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
          key="1"
          className="dashboard-logo"
          icon={<ThunderboltFilled />}
        >
          CoderHeroes
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="/parent" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ReadOutlined />}>
          <Link to="/parent-booking" className="link">
            Booking
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ReadOutlined />}>
          <Link to="/cart" className="link">
            Cart <span>{cart.length > 0 ? `(${cart.length})` : null}</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.parentReducer.cart,
  };
};

export default connect(mapStateToProps)(ParentSidebar);
