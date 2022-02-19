import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';
import '../../../styles/index.less';

import instructorImg from '../../../styles/InstructorLandingStyles/assets/instructor.png';
import studentImg from '../../../styles/InstructorLandingStyles/assets/student.png';
import fam1Img from '../../../styles/InstructorLandingStyles/assets/fam1.png';
import famyogo from '../../../styles/InstructorLandingStyles/assets/famyogo.png';
import coderhero from '../../../styles/InstructorLandingStyles/assets/coderhero.png';

const { Content } = Layout;
const { Title, Text } = Typography;

const Testimonials = () => {
  return (
    <Content className="il__bottom">
      <Row gutter={16}>
        <Col span={12}>
          <div className="left-container">
            <div className="instructor-landing-bottom-leftCircle">
              <div className="instructor-landing-bottom-left">
                <Title
                  style={{
                    color: '#263E47',
                    fontSize: '1.6rem',
                    textAlign: 'center',
                  }}
                >
                  STUDENT & PARENT <br />
                  TESTIMONIALS
                </Title>
                <Text
                  style={{
                    color: '#504A4A',
                    width: '50%',
                    fontSize: '1.1rem',
                  }}
                >
                  See what some of our CoderHeroes parents and students have to
                  say about their exemplary experiences learning to code, making
                  great friends, and building skills and values to last a
                  lifetime.{' '}
                </Text>
                <button className="custom-btn3">FIND AN INSTRUCTOR</button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="il__grid__container">
            <div className="il__grid__toprow">
              <div className="il__grid__item">
                <img src={instructorImg} alt="instructor front of class" />
              </div>
              <div className="il__grid__item">
                <img src={fam1Img} alt="famimly meditation" />
              </div>
            </div>
            <div className="il__grid__bottomrow">
              <div className="il__grid__item">
                <img className="test" src={coderhero} alt="superhero boy" />
              </div>
              <div className="il__grid__bottomrow__right">
                <div className="il__grid__item">
                  <img src={famyogo} alt="family yoga" />
                </div>
                <div className="il__grid__item">
                  <img src={studentImg} alt="kid on computer" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Testimonials;
