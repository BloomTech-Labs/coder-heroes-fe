import React from 'react';
import { Menu } from 'antd';

export default function MainHeader() {
  //TO-DO: Implement Auth0
  // const { authService, authState } = useOktaAuth();
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Programs</Menu.Item>
        <Menu.Item key="2">Instructors</Menu.Item>
        <Menu.Item key="3">Booking</Menu.Item>
        <Menu.Item key="4">Scholarships</Menu.Item>
        <Menu.Item key="5">Contact Us (button)</Menu.Item>
        {/* {authState.isAuthenticated ? (
          <Menu.Item
            key="6"
            onClick={() => {
              authService.logout();
            }}
          >
            Logout
          </Menu.Item>
        ) : (
          <></>
        )} */}
      </Menu>
    </div>
  );
}
