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
      <Row gutter={6}>
        <Col span={24}>
          <Title
            className="il__heading"
            style={{
              color: 'white',
              fontSize: '3.4rem',
              fontWeight: '500',
              letterSpacing: '2px',
            }}
          >
            HOW CODERHEROES WORKS
          </Title>
        </Col>
      </Row>
      <Row gutter={6}>
        <Col span={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">1</div>
            <Title
              style={{
                fontSize: '1.4rem',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                letterSpacing: '1px',
              }}
              className="il__heading"
            >
              WHAT KIND OF HELP DO YOU NEED?
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={girlCoder} alt="girl coder" />
            </div>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: '1.1rem',
              }}
            >
              We believe all students deserve to have access to quality
              instructors that teach code and lifelong skills. We put students
              at the forefront of our mission.
            </Text>
          </div>
        </Col>
        <Col span={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">2</div>
            <Title
              style={{
                fontSize: '1.4rem',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                letterSpacing: '1px',
              }}
              className="il__heading"
            >
              FIND AN INSTRUCTOR
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={cHeroes} alt="kids coding" />
            </div>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: '1.1rem',
              }}
            >
              Our super tutors offer quality instruction at a wide variety of
              skill sets, age ranges, and formats. We make coding fun!
            </Text>
          </div>
        </Col>
        <Col span={8}>
          <div className="il__mid__info">
            <div className="il__mid__info__stepCircle">3</div>
            <Title
              style={{
                fontSize: '1.4rem',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                letterSpacing: '1px',
              }}
              className="il__heading"
            >
              LEARN AT A LESSON
            </Title>
            <div className="il__mid__info__contentCircle">
              <img src={kidsComp} alt="more kids coding" />
            </div>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
                fontSize: '1.1rem',
              }}
            >
              Online tutors are available to help your student receive guidance
              to fit your schedule and preferences.
            </Text>
          </div>
        </Col>
      </Row>
      <Row gutter={6}>
        <Col span={8}>
          <button className="il__browseBtn">BROWSE INSTRUCTORS</button>
        </Col>
      </Row>
    </Content>
  );
};

export default HowItWorks;
