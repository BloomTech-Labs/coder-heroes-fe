import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
// The icons bellow will be used to help build the footer
// import {
//   FacebookOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
//   YoutubeOutlined,
//   LinkedinOutlined,
// } from '@ant-design/icons';

const { Footer } = Layout;
const { Title } = Typography;

function MainFooter() {
  return (
    <Footer style={{ padding: '40px', backgroundColor: '#6A0C49' }}>
      <Row justify="space-between">
        <Col className="footer__column">
          <Title className="title" style={{ color: '#ffffff' }} level={3}>
            About
          </Title>
        </Col>
        <Col className="footer__column">
          <Title className="title" style={{ color: '#ffffff' }} level={3}>
            Services
          </Title>
        </Col>
        <Col className="footer__column">
          <Title className="title" style={{ color: '#ffffff' }} level={3}>
            Contact
          </Title>
        </Col>
        <Col className="footer__column" style={{ textAlign: 'right' }}>
          <Title className="title" style={{ color: '#ffffff' }} level={1}>
            CoderHeroes
          </Title>
        </Col>
      </Row>
    </Footer>
  );
}

// CoderHeroes Social Media Links
// https://www.facebook.com/coderheroes/
// https://twitter.com/coderheroes/
// https://www.instagram.com/coderheroes/
// https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg/
// https://www.linkedin.com/company/coderheroes/

export default MainFooter;
