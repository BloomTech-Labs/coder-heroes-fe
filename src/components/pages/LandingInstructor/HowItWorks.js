import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';
import girlCoder from '../../../styles/InstructorLandingStyles/assets/girlcoder.jpeg';
import kidsComp from '../../../styles/InstructorLandingStyles/assets/kidscomp.jpeg';
import cHeroes from '../../../styles/InstructorLandingStyles/assets/cheroes.jpeg';
import '../../../styles/index.less';

const { Content } = Layout;
const { Title, Text } = Typography;

const HowItWorks = () => {
  return (
    <Content className="il__mid">
      <Row>
        <Col span={24}>
          <Title className="il__heading il__mid__heading" level={2}>
            HOW CODERHEROES WORKS
          </Title>
        </Col>
      </Row>
      <Row gutter={6}>
        <Col xs={24} lg={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">1</div>
            <Title
              style={{
                fontSize: '1.4rem',
              }}
              className="il__heading il__heading_inner il__mid__heading"
            >
              WHAT KIND OF HELP DO YOU NEED?
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={girlCoder} alt="girl coder" />
            </div>

            <Text className="il__mid__info__text">
              Are you interested in CoderCamp? Need a CoderSitter? Hoping to try
              CoderYoga? Find the right program for you.
            </Text>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">2</div>
            <Title
              style={{
                fontSize: '1.4rem',
              }}
              className="il__heading il__heading_inner il__mid__heading"
            >
              FIND AN INSTRUCTOR
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={cHeroes} alt="kids coding" />
            </div>

            <Text className="il__mid__info__text">
              We will match you with the best coding instructors who are ready
              to help you learn at any level.
            </Text>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">3</div>
            <Title
              style={{
                fontSize: '1.4rem',
              }}
              className="il__heading il__heading_inner il__mid__heading"
            >
              LEARN AT A LESSON
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={kidsComp} alt="more kids coding" />
            </div>

            <Text className="il__mid__info__text">
              Learn together in a virtual synchronous live lesson space, with
              asynchronous resources to learn at your pace.
            </Text>
          </div>
        </Col>
      </Row>
      <div className="il__browseBtn__container il__heading_inner">
        <button className="il__browseBtn">BROWSE INSTRUCTORS</button>
      </div>
    </Content>
  );
};

export default HowItWorks;
