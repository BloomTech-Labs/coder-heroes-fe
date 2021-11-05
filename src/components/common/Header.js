import React from 'react';
import { Menu } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

export default function MainHeader(props) {
  const { authService, oktaAuth } = useOktaAuth();
  console.log(localStorage.getItem('okta-token-storage').length);

  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Programs</Menu.Item>
        <Menu.Item key="2">Instructors</Menu.Item>
        <Menu.Item key="3">Booking</Menu.Item>
        <Menu.Item key="4">Scholarships</Menu.Item>
        <Menu.Item key="5">Contact Us (button)</Menu.Item>
        {localStorage.getItem('okta-token-storage').length > 2 ? (
          <Menu.Item
            key="6"
            onClick={() => {
              // authService.logout();
              // oktaAuth.tokenManager.clear();
            }}
          >
            Logout
          </Menu.Item>
        ) : (
          <></>
        )}
      </Menu>
    </div>
  );
}
