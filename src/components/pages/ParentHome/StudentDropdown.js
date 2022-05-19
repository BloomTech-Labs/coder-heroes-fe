import React from 'react';
import { Menu, Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  //Needs functionality to render items
}

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: 'Student Name',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: 'Student Name',
        key: '2',
        icon: <UserOutlined />,
      },
      {
        label: 'Student Name',
        key: '3',
        icon: <UserOutlined />,
      },
    ]}
  />
);

const StudentDropdown = () => {
  return (
    <Space wrap>
      <Dropdown.Button
        className="dropStudent"
        overlay={menu}
        placement="bottom"
        icon={<UserOutlined />}
      >
        Choose Student
      </Dropdown.Button>
    </Space>
  );
};

export default StudentDropdown;
