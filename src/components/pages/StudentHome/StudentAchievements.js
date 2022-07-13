import React from 'react';
import Banner from '../../common/Banner';
import StudentSidebar from './StudentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import brightIdea from '../../../img/Assets/Bright idea.svg';
import caringHelper from '../../../img/Assets/Caring helper.svg';
import coolCoder from '../../../img/Assets/Cool Coder.svg';
import dailyChampion from '../../../img/Assets/Daily Champion.svg';
import designThinker from '../../../img/Assets/Design Thinker.svg';
import ecoConscious from '../../../img/Assets/Eco- conscious.svg';
import organizedTaskmaker from '../../../img/Assets/Organized Taskmaker.svg';
import teamworkCollaborator from '../../../img/Assets/Teamwork collaborator.svg';

const StudentAchievements = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <StudentSidebar active="dashboard" />
      <Content className="achievements-container">
        <Banner active="achievements" />
        <a href="">
          <Card className="achievement-card">
            <img src={dailyChampion} alt="daily champion SVG." />
            <h1>Daily Champion</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={brightIdea} alt="bright Idea innovator SVG." />
            <h1>Bright Idea Innovator</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={ecoConscious} alt="Eco-Conscious SVG." />
            <h1>Eco-Conscious</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={designThinker} alt="Desgin Thinker SVG." />
            <h1>Design Thinker</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={coolCoder} alt="cool coder SVG." />
            <h1>Cool Coder</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={teamworkCollaborator} alt="Teamwork Collab SVG." />
            <h1>Teamwork Collaborator</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={organizedTaskmaker} alt="Organized Taskmaker SVG." />
            <h1>Organized Taskmaker</h1>
          </Card>
        </a>
        <a href="">
          <Card className="achievement-card">
            <img src={caringHelper} alt="Caring Helper SVG." />
            <h1>Caring Helper</h1>
          </Card>
        </a>
      </Content>
    </Layout>
  );
};

export default StudentAchievements;
