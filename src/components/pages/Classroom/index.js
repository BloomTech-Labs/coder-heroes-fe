import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/index.less';
import { Card, Button, Layout, Typography, Row } from 'antd';
import StudentCard from './StudentCard';
const { Content } = Layout;
const { Title } = Typography;

const students = [
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'a24efb',
    name: 'Margery',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const Classroom = () => {
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="classroom__title">Classroom</Title>
          <div className="classroom__students">
            {students.map(student => (
              <StudentCard student={student} />
            ))}
          </div>
          <Row justify="start">
            <Card className="classroom__feedback__summary"></Card>
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
