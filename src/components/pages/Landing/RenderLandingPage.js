import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../redux/actions/userActions';
import logo from '../../../img/coderheroes-logo.svg';
import ocloud from '../../../img/bg-orange-cloud.svg';
import students from '../../../img/class-imge-left.jpg';
import gcloud from '../../../img/bg-green-cloud.svg';
import profile from '../../../img/profile-img-brianne-caplan.png';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import '../../../styles/LandingPageStyles/index.less';
import { Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;
// const { Content } = Layout;

function RenderLandingPage(props) {
  const { authState, authService } = useOktaAuth();
  const dispatch = useDispatch();
  const { idToken } = authState;

  useEffect(() => {
    if (idToken) {
      dispatch(getCurrentUser(idToken, authState, authService));
    }
    // eslint-disable-next-line
  }, [dispatch, idToken]);

  return (
    <div className="landing-container">
      {/* Main text container */}
      <div className="landing-main-container">
        <div className="cloudbg">
          <img
            className="coder-heroes"
            src={logo}
            alt="CoderHeroes Text in Turquoise"
          />
          <div className="landing-main-text">
            <Space align="center">
              <Title level={2}> Coding is a superpower</Title>
            </Space>
            <Paragraph>
              Through a love of teaching and technology, we empower youth to
              change the world with their ideas
            </Paragraph>
          </div>

          {/* Button container */}
          <div className=" landing-button-container ">
            <Link className="landing-btn" to="/browse-programs">
              BROWSE PROGRAMS
            </Link>
            <Link className="landing-btn" to="/register">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>

      {/* Second text container */}
      <div className="landing-second-container">
        <div className="landing-second-images">
          <img className="orange-cloud" src={ocloud} alt="Orange Cloud" />
          <img
            className="classroom-photo"
            src={students}
            alt="class full of smiling students"
          />
        </div>
        <div className="landing-second-container-content">
          <Space align="center">
            <div className="landing-second-container-text">
              <Title level={3} style={{ color: 'white', fontSize: '15px' }}>
                GIVE BACK TO THE COMMUNITY
              </Title>
              <Title level={1} style={{ color: `white`, fontSize: '28px' }}>
                Support Code Your Dreams
              </Title>
              <p>
                All CoderHeroes proceeds provide direct funding to our original
                mission, centered in incubating tech skills within under served
                school districts.
              </p>
            </div>
          </Space>
          <center>
            <Link
              className="landing-btn"
              to={{
                pathname: 'https://codeyourdreams.org',
              }}
              target="_blank"
            >
              VISIT WEBSITE
            </Link>
          </center>
        </div>
      </div>
      {/* Third text container */}
      <div className="landing-third-container">
        <div className="empty-space"></div>
        <img
          className="landing-third-container-green"
          src={gcloud}
          alt="Green Cloud"
        />
      </div>
      <div className="landing-fourth-container">
        <div className="empty-space-two"></div>
        <img
          className="landing-fourth-container-pic"
          src={profile}
          alt="Brianne Smiling"
        />
        <div className="landing-third-container-text">
          <div className="description">
            <p className="quotes">
              “I have 7+ years of experience working in technology. I bring
              excitement and positivity to every class, virtual and in-person."
            </p>
            <p>
              "I have experience teaching the following subjects for K-12
              students: Python, Swift, JavaScript, App Inventor, Design{' '}
              Thinking, UI/UX Design, Sales & Marketing.”
            </p>
          </div>
          <div className="brianne">
            <Title level={2} style={{ color: `black`, 'font-size': '25px' }}>
              BRIANNE CAPLAN
            </Title>
            <Title level={4}>
              FOUNDER & CEO, CODERHEROES & CODE YOUR DREAMS
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
