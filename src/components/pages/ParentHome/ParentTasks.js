import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ParentNavbar from './ParentNavbar';
import '../../../styles/ParentStyles/index.less';
import { Layout, Collapse, Card } from 'antd';
import 'antd/dist/antd.css';

const ParentTasks = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar active="tasks" />
      <Banner />
      <ParentNavbar />
      <Content>
        <Card title="Intro to HTML with Teacher Name">
          <Collapse>
            <Collapse.Panel
              header="Coding Practice in MIT App Inventor"
              key="1"
            >
              <p>Follow directions in Module 3</p>
              <p>Due Date: Friday, July 22</p>
              <p>Status: In Progress</p>
            </Collapse.Panel>
            <Collapse.Panel header="Favorite Animal Web Page" key="2">
              <p>Create a Web Page about your favorite animal!</p>
              <p>Due Date: Wed, July 20</p>
              <p>Status: Not Started</p>
            </Collapse.Panel>
          </Collapse>
        </Card>
        <Card title="Weekly Agenda">
          <Collapse>
            <Collapse.Panel header="Weekly Agenda" key="1">
              <p>
                Fill out your weekly agenda with how many minutes of coding
                practice you plan to do over the next 5 days
              </p>
              <p>Due Date: Mon, July 18</p>
              <p>Status: COMPLETE</p>
            </Collapse.Panel>
          </Collapse>
        </Card>
      </Content>
    </Layout>
  );
};

export default ParentTasks;
