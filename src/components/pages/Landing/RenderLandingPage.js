import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../redux/actions/userActions';
import logo from '../../../img/coderheroes-logo.svg';
import ocloud from '../../../img/bg-orange-cloud.svg';
import students from '../../../img/class-imge-left.jpg';
import gcloud from '../../../img/bg-green-cloud.svg';
import profile from '../../../img/profile-img-brianne-caplan.png';
import Button from '../../common/Button';
import '../../../styles/LandingPageStyles/index.less';
import { Typography, Card } from 'antd';
import { NavLink } from 'react-router-dom';
//TO-DO: Implement Auth0

const { Title, Paragraph } = Typography;

function RenderLandingPage(props) {
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
            <Title className="landing-main-text landing-main-title" level={2}>
              Coding is a Superpower!
            </Title>
            <Paragraph className="landing-main-text">
              Through a love of teaching and technology, <br />
              we empower youth to change the world with their ideas.
            </Paragraph>
          </div>

          {/* Button container */}
          <div className="landing-button-container">
            <NavLink to="/browse-programs">
              <Button
                classType="browse-btn btn"
                buttonText="Browse Programs"
                onClick={''}
              ></Button>
            </NavLink>
            <NavLink to="/register">
              <Button
                classType="create-account-btn btn"
                buttonText="Create Account"
                onClick={''}
              ></Button>
            </NavLink>
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
          <div className="landing-second-container-text">
            <Title
              className="landing-second-container-text landing-second-container-title-one"
              level={2}
            >
              Give Back To The Community
            </Title>
            <Title
              level={2}
              className="landing-second-container-text landing-second-container-title-two"
            >
              Support Code Your Dreams
            </Title>
            <Paragraph className="landing-second-container-text landing-second-container-paragraph ">
              All CoderHeroes proceeds provide direct funding to our original
              mission, centered in incubating tech skills within under served
              <br />
              school districts.
            </Paragraph>
          </div>
          <NavLink
            className="landing-btn"
            to={{
              pathname: 'https://codeyourdreams.org',
            }}
            target="_blank"
          >
            <Button className="primary" buttonText="Visit Website" onClick={''}>
              Visit Website
            </Button>
          </NavLink>
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
        <div className="landing-fourth-container-text">
          <Card className="description">
            <Paragraph className="landing-fourth-container-text quotes">
              “I have 7+ years of experience working in technology. I bring
              excitement and positivity to every class, virtual and in-person."
            </Paragraph>
            <Paragraph className="landing-fourth-container-text">
              "I have experience teaching the following subjects for K-12
              students: Python, Swift, JavaScript, App Inventor, Design{' '}
              Thinking, UI/UX Design, Sales & Marketing.”
            </Paragraph>
          </Card>
          <Card className="brianne landing-fourth-container-text">
            <Title level={3}>Brianne Caplan</Title>
            <Title level={4}>
              Founder & CEO, Coderhereos & Code Your Dreams
            </Title>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
