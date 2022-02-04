import React from 'react';
import { Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

export default function MainFooter({ props }) {
  return (
    <div>
      <Footer id="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <a href="#.">email@email.com</a>
            <a href="#.">Find a Program</a>
          </div>

          <div className="footer-section">
            <h2>Services</h2>
            <a href="#.">FAQ</a>
            <a href="#.">Site Map</a>
          </div>

          <div className="footer-section">
            <h2>Information</h2>
            <a href="#.">About Coderheroes</a>
            <a href="#.">Privacy Policy</a>
            <a href="#.">Terms and Conditions</a>
            <a href="#.">Press Inquiries</a>
          </div>

          <div style={{ textAlign: 'center' }} className="footer-section">
            <h1>Coderheroes</h1>
            <div className="footerSocial">
              <a
                href="https://www.facebook.com/coderheroes."
                className="footer-socialIcon"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://twitter.com/coderheroes."
                className="footer-socialIcon"
              >
                <TwitterOutlined />
              </a>
              <a
                href="https://www.instagram.com/coderheroes/."
                className="footer-socialIcon"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg."
                className="footer-socialIcon"
              >
                <YoutubeOutlined />
              </a>
              <a
                href="https://www.linkedin.com/company/coderheroes/."
                className="footer-socialIcon"
              >
                <LinkedinOutlined />
              </a>
            </div>
            <small>Copyright &#169; 2020 coderheroes Inc.</small>
          </div>
        </div>
      </Footer>
    </div>
  );
}
