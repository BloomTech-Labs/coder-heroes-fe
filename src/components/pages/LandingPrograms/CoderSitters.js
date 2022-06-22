import React from 'react';
import { Layout, Typography } from 'antd';
import collage from '../../../styles/ProgramsLandingStyles/assets/codersitters.png';
const { Content } = Layout;
const { Title, Text } = Typography;

export default function CoderSitters() {
  return (
    <Layout>
      <Content className="pl__na__sitter__container">
        <div className="pl__na__sitter__container_wrapper">
          <div className="pl__na__top__sitter__container">
            <Title className="pl__na__sitter__title" level={2}>
              CODERSITTERS
            </Title>
            <Text className="pl__na__intro__text">
              Parents get their needed
              <br />
              distraction-free time. Kids get to
              <br />
              learn coding through play.
            </Text>
            <div className="pl__na__top__mid__container">
              <Title className="pl__na__sitter__title__container" level={2}>
                THINK BABY SITTER + CODING INSTRUCTOR.
              </Title>
              <Text className="pl__na__sitter__text__container">
                Our lessons include playing age-appropriate
                <br />
                coding games online, in tandem with a wide
                <br />
                range of interactive offline activities. These
                <br />
                might include: drawing, prototyping, crafting
                <br />
                or imaginative brainstorming
              </Text>
            </div>
            <div className="pl__na__age__container">
              <Text className="pl__na__age">Ages 6 and Up.</Text>
            </div>
            <div className="pl__na__button__container">
              <button className="pl__na__sitter__button" type="submit">
                Learn More
              </button>
            </div>
          </div>

          <div className="pl__na__image__container">
            <img
              className="pl__na__top__right__collage"
              src={collage}
              alt="peach star"
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}
