import React from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { Layout } from 'antd';
import Form from '../JoinUpdate';

const { Footer } = Layout;
function MainFooter() {
  return (
    <>
      {/* Dispaly for Desktop (is hidden at 900px screen width or below) */}
      <Form />
      <Footer
        className="desktop-footer"
        style={{
          padding: '40px',
          backgroundColor: '#6A0C49',
        }}
      >
        <DesktopFooter />
      </Footer>
      {/* Display for Mobile (only visible when screen width is below 900px) */}
      <Footer
        className="mobile-footer"
        style={{
          backgroundColor: '#6A0C49',
        }}
      >
        <MobileFooter />
      </Footer>
    </>
  );
}
export default MainFooter;
