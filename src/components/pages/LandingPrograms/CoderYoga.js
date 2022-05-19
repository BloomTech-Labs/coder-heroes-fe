import React from 'react';
import { Layout, Typography } from 'antd';
import blueBg from '../../../styles/ProgramsLandingStyles/assets/blueburstwborder.png';
import coderYoga from '../../../styles/ProgramsLandingStyles/assets/CoderYogaPic.png';
const { Content } = Layout;
const { Title, Text } = Typography;

export default function CoderYoga() {
  return (
    <Layout>
      <Content className="pl__section__wrap">
        <div className="pl__na__first__container">
          <div className="pl__na__left__container">
            <div className="pl__na__image__containers">
              <img
                className="pl__na__image__bluebg"
                src={blueBg}
                alt="Blue Background"
              />
              <img
                className="pl__na__image__yoga"
                src={coderYoga}
                alt="CoderYoga Lesson"
              />
            </div>
          </div>
          <div className="pl__na__right">
            <div className="pl__na__right__container">
              <Title className="pl__na__coder__yoga__title" level={2}>
                CODERYOGA
              </Title>
              <Text className="pl__na__right__info__container" level={3}>
                Kids learn coding basics through
                <br />
                yoga stories and exercise.
              </Text>
              <Title className="pl__na__right__sub__heading" level={2}>
                OUR NEWEST COURSE CATEGORY!
              </Title>
              <Text className="pl__na__right__info">
                At CoderYoga, we combine the power of
                <br />
                code with the adventure of user journeys.
              </Text>
            </div>
            <div className="pl__na__button__container">
              <button className="pl__na__button" type="submit">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
