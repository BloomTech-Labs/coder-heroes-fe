import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import lightBulbs from '../../../styles/ProgramsLandingStyles/assets/lightbulbs.png';
const { Content } = Layout;
const { Title, Text } = Typography;

export default function ExplorePrograms() {
  return (
    <Layout>
      <Content className="pl__na__container">
        <div className="pl__na__top__wrapper">
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
              <Link to="/parent-book-now">
                {/* {user.name} */}
                <button className="pl__na__top__button" type="submit">
                  BOOK NOW
                </button>
              </Link>
              <button className="pl__na__top__button" type="submit">
                VOLUNTEER
              </button>
            </div>
          </div>
          <div className="pl__na__top__right__image__container">
            {/* BLOCKER:If anyone has experience with rendering images, please take on this part of the project.*/}
            <img
              className="pl__na__top__right__light__bulbs"
              src={lightBulbs} // located inside styles/ProgramsLandingStyles/assets
              alt="peach star"
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}
