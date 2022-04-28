import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

function DesktopFooter() {
  return (
    <>
      <Row
        justify="space-between"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <Col>
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Contact
          </Title>
          <div>
            <ul>
              <li className="footer__text">brianne@coderheroes.com</li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/browse-programs"
                >
                  Find a Program
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Services
          </Title>
          <div>
            <ul>
              <li>
                <Link className="footer__nav-link footer__text">FAQ</Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text">Site Map</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            About
          </Title>
          <div>
            <ul>
              <li>
                <Link className="footer__nav-link footer__text">
                  About CoderHeroes
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text">
                  Press Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          style={{
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Title
            className="title"
            style={{
              color: '#ffffff',
              marginBottom: '0px',
              fontWeight: '400',
            }}
            level={1}
          >
            CoderHeroes
          </Title>
          <Row style={{ justifyContent: 'space-between', marginLeft: '20px' }}>
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
          <span
            className="footer__text"
            aria-label="CoderHeroes copyright 2022"
          >
            Copyright © 2022 Coderheroes Inc.
          </span>
        </Col>
      </Row>
    </>
  );
}

export default DesktopFooter;
