import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function MainFooter({ props }) {
  return (
    <div>
      <Footer id="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h2>Contact Us</h2>
            <a href="#.">email@email.com</a>
            <a href="#.">Find a Program</a>
          </div>

          <div class="footer-section">
            <h2>Services</h2>
            <a href="#.">FAQ</a>
            <a href="#.">Site Map</a>
          </div>

          <div class="footer-section">
            <h2>Information</h2>
            <a href="#.">About Coderheroes</a>
            <a href="#.">Privacy Policy</a>
            <a href="#.">Terms and Conditions</a>
            <a href="#.">Press Inquiries</a>
          </div>

          <div style={{ textAlign: 'center' }} class="footer-section">
            <h2>Coderheroes</h2>
            <div class="social-links">
              <a href="#.">Icon</a>
              <a href="#.">Icon</a>
              <a href="#.">Icon</a>
              <a href="#.">Icon</a>
            </div>
            <small>Copyright &#169; 2020 coderheroes Inc.</small>
          </div>
        </div>
      </Footer>
    </div>
  );
}
