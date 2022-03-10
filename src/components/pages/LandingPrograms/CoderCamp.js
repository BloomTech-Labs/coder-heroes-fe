import React from 'react';
import { Layout, List, Typography } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function CoderCamp() {
  const skills = [
    'Idea Generation',
    'Project Management',
    'User Interface & User Experience Design',
    'App Development',
    'User Research',
    'Sales & Marketing',
  ];

  return (
    <div>
      <Layout>
        <Content>
          <div className="pl__na__second__container">
            <div className="pl__na__second__left">border</div>
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
        </Content>
      </Layout>
    </div>
  );
}
