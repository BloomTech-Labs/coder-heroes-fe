import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

function MobileFooter() {
  return (
    <>
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={24}></Col>
      </Row>
      <Divider style={{ color: '#ffffff' }} />
      <Row>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Title
            className="footer__copyright"
            style={{
              color: '#ffffff',
              marginBottom: '10px',
              fontWeight: '400',
            }}
            level={1}
          >
            © 2022 CoderHeroes
          </Title>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: 'space-between',
          maxWidth: '250px',
          margin: 'auto',
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/coderheroes/"
        >
          <FacebookOutlined
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/coderheroes/"
        >
          <TwitterOutlined style={{ color: '#ffffff', fontSize: '40px' }} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/coderheroes/"
        >
          <InstagramOutlined
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC7vHHesa12tznVpgvnwbnKg/"
        >
          <YoutubeOutlined
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/coderheroes/"
        >
          <LinkedinOutlined
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
      </Row>
    </>
  );
}

export default MobileFooter;
