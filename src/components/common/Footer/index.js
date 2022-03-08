import React from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import { Layout } from 'antd';

const { Footer } = Layout;

function MainFooter() {
  return (
    <>
      {/* Dispaly for Desktop (is hidden at 900px screen width or below) */}
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
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '40px',
          paddingTop: '40px',
          backgroundColor: '#6A0C49',
        }}
      >
        <MobileFooter />
      </Footer>
    </>
  );
}

export default MainFooter;
