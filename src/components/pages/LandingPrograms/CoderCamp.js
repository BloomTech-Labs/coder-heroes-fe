import React from 'react';
import { Layout, List, Typography } from 'antd';
import {
  CaretRightFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import pinkBorder from '../../../styles/ProgramsLandingStyles/assets/burstwborder.png';
import kidCoder from '../../../styles/ProgramsLandingStyles/assets/laptop-png-transparent-1.png';
import fatherAndSon from '../../../styles/ProgramsLandingStyles/assets/father&son.jpeg';
const { Content } = Layout;
const { Title, Text } = Typography;

export default function CoderCamp() {
  // skills data
  const skills = [
    'Idea Generation',
    'Project Management',
    'User Interface & User Experience Design',
    'App Development',
    'User Research',
    'Sales & Marketing',
  ];

  return (
    <Layout>
      <Content>
        <div className="pl__na__second__container">
          <div className="pl__na__second__left">
            <div className="pl__na__second__left__image__container">
              <img
                className="pl__na__second__left__pink__border"
                src={pinkBorder}
                alt="peach star"
              />
              <img
                className="pl__na__second__left__kid__coder"
                src={kidCoder}
                alt="peach star"
              />
            </div>
          </div>
          <div className="pl__na__second__right">
            <div className="pl__na__second__right__container">
              <Title className="pl__na__heading pl__na__second__heading">
                CODERCAMP
              </Title>
              <Text className="pl__na__second__text__container">
                Your child will experience the fun
                <div className="pl__na__second__text">
                  process of building a real,fully
                </div>
                <div className="pl__na__second__text">developed app.</div>
              </Text>
              <Title className="pl__na__second__sub__heading">
                SKILLS STUDENTS LEARN INCLUDE
              </Title>
              <div className="pl__na__second__skills_list__container">
                <List
                  className="pl__na__second__skills_list"
                  grid={{ gutter: 6, column: 1 }}
                  dataSource={skills}
                  renderItem={item => (
                    <List.Item>
                      <CaretRightFilled /> {item}
                    </List.Item>
                  )}
                ></List>
              </div>
              <div className="pl__na__top__button__container">
                <button className="pl__na__top__button" type="submit">
                  VIEW PAST PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {/* Testimonials */}
        <div className="pl__na__testimonials__container">
          <div>
            <LeftOutlined style={{ color: '#fefefe', fontSize: '62px' }} />
          </div>
          {/* Image Section */}
          <div>
            <img
              className="pl__na__third__father__son"
              src={fatherAndSon}
              alt="Father and Son Testimony"
            />
          </div>
          {/* Text sections */}
          <div>
            {/* Testimony Section */}
            <div className="pl__testimony__section__one">
              <Text className="pl__na__testimony__text__container">
                "Our child was fortunate enough to earn his right to be a
                <br />
                student and he has thrived, learned and enjoyed every single
                <br />
                minute of this amazing program!"
              </Text>
            </div>
            {/* Parent Name Section */}
            <div className="pl__testimony__section__two">
              <Text className="pl__na__testimony__name__container">
                David
                <br />
                CoderHeroes Parent
              </Text>
            </div>
          </div>
          <div>
            <RightOutlined style={{ color: '#fefefe', fontSize: '62px' }} />
          </div>
        </div>

        {/* CoderSitters */}
        {/* CoderSitters */}
        <div className="pl__na__codersitters__container"></div>
      </Content>
    </Layout>
  );
}
