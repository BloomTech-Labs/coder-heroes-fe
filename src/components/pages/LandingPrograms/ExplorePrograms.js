import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function ExplorePrograms() {
  return (
    <Layout>
      <Content className="pl__na__container">
        <div className="pl__na__top__container">
          <div className="pl__na__top__left">
            <Title className="pl__na__heading pl__na__top__heading">
              PROGRAMS
            </Title>
            <Title className="pl__na__top__sub__heading">
              Explore the possibilities!
            </Title>
            <Text className="pl__na__top__text">
              Browse our current course offerings. Learn more
              <br />
              than just code, including life-long skills and the
              <br />
              ability to turn your passion into an app.
            </Text>
            <div className="pl__na__top__button__container">
              <button className="pl__na__top__button" type="submit">
                BOOK NOW
              </button>
              <button className="pl__na__top__button" type="submit">
                VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
