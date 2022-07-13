import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import StudentSideBar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import '../../../styles/ParentStyles/index.less';
// import InstructorQuestions from './InstructorQuestions.js';
function StudentHome() {
  const { Content } = Layout;
  return (
    <div className="App">
      <Layout style={{ width: '100%' }}>
        <StudentSideBar />
        <Content>
          <Banner />
          {/* <div className="instructorquestions">
            <InstructorQuestions />
          </div> */}
          <Layout>
            <Content>
              <StudentDashboard />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default StudentHome;
