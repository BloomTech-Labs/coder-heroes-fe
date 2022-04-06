import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/index.less';
import { Card, Button, Layout, Typography, Row, Badge } from 'antd';
import StudentCard from './StudentCard';
const { Content } = Layout;
const { Title } = Typography;

const students = [
  {
    id: 'a24efb',
    name: 'Margery Tyrell',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Pablo Escobar',
    image:
      'https://images.unsplash.com/photo-1580968895877-a19ec54aadc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'a24efb',
    name: 'Jose Garcia',
    image:
      'https://images.unsplash.com/photo-1596495578076-0c3a2be70d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'a24efb',
    name: 'Bob Dabilder',
    image:
      'https://images.unsplash.com/photo-1614900327600-1261b13586f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'a24efb',
    name: 'Rachel Stark',
    image:
      'https://images.unsplash.com/photo-1583469009555-3b351b9ccd57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 'a24efb',
    name: 'Christian Xu',
    image:
      'https://images.unsplash.com/photo-1628243426757-b092ba839ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'a24efb',
    name: 'Annie Ruokay',
    image:
      'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const Classroom = () => {
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="classroom__students">
            {students.map(student => (
              <StudentCard student={student} />
            ))}
          </div>
          <Row className="feedback__badges">
            <Card className="classroom__feedback__summary">
              <h1>Summary of Feedback Badges</h1>
              <Row>
                <Badge count={7} className="student__card__badge"></Badge>
                <p>feedback badges have been given</p>
              </Row>
              <Row>
                <Badge count={1} className="student__card__badge"></Badge>
                <p>students lack any feedback badges</p>
              </Row>
            </Card>
            <Button className="classroom_feedback__button">
              GIVE FEEDBACK
            </Button>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Classroom;
