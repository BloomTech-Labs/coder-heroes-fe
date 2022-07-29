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
import ScrollToTop from '../../../utils/scrollToTopHelper';

const { Title } = Typography;

function MobileFooter() {
  return (
    <div className="footer-content">
      <Row justify="space-evenly">
        <Col className="services_column">
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
                <Link className="footer__nav-link footer__text" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="footer__nav-link footer__text" to="/site-map">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="about_column">
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
                <Link
                  className="footer__nav-link footer__text"
                  to="/about-coderheroes"
                >
                  About CoderHeroes
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="footer__nav-link footer__text"
                  to="/press-inquiries"
                >
                  Press Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="contact_column">
          <Title
            className="title"
            style={{ color: '#ffffff', fontWeight: '400' }}
            level={3}
          >
            Contact
          </Title>
          <div>
            <ul>
              <li
                onClick={() =>
                  (window.location = 'mailto:brianne@coderheroes.com')
                }
                className="navbar__btn navbar__contact"
              >
                brianne@coderheroes.com
              </li>
              <li>
                <ScrollToTop>
                  <Link
                    className="footer__nav-link footer__text"
                    to="/browse-programs"
                  >
                    Find a Program
                  </Link>
                </ScrollToTop>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Divider style={{ color: '#ffffff' }} />
      <Row
        className="social_media_icons_container"
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
            className="social_media"
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
          <TwitterOutlined
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/coderheroes/"
        >
          <InstagramOutlined
            className="social_media"
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
            className="social_media"
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
            className="social_media"
            style={{
              color: '#ffffff',
              fontSize: '40px',
            }}
          />
        </a>
      </Row>
      <Row className="footer__title--container">
        <Title
          className="footer__title--copyright"
          style={{
            color: '#ffffff',
            fontSize: '36px',
            margin: 'auto',
            marginBottom: '10px',
            fontWeight: '400',
            textAlign: 'center',
          }}
          level={1}
        >
          © 2022 CoderHeroes
        </Title>
      </Row>
    </div>
  );
}

export default MobileFooter;
