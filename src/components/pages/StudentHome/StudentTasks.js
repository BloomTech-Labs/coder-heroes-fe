import React from 'react';
import Banner from '../../common/Banner';
import StudentSidebar from './StudentSidebar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';

const StudentTasks = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <StudentSidebar active="tasks" />
      <Content className="tasks-container">
        <Banner />
        <Card className="classCard">
          <div className="taskImage"></div>
          <div className="taskText">
            <Card title="Intro to HTML with Teacher Name">
              <div>
                <p>Follow directions on module 3 and turn it in by friday</p>
              </div>
              <div>
                <p>Due: Friday, Jul 13th</p>
                <p>Class 3</p>
                <p>Teacher name</p>
              </div>
              <div className="taskButton">
                <button>Start</button>
              </div>
            </Card>
          </div>
          <Card title="Weekly Agenda">
            <div>
              <p>Follow directions on module 3 and turn it in by friday</p>
            </div>
            <div>
              <p>Due: Friday, Jul 13th</p>
              <p>Class 3</p>
              <p>Teacher name</p>
            </div>
            <div className="taskButton">
              <button>Start</button>
            </div>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
};

export default StudentTasks;
