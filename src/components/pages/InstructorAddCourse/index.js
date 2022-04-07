import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import InstructorAddedCoursesList from './InstructorAddedCoursesList';
import { Layout } from 'antd';
import InstructorAddCourseForm from './InstructorAddCourseForm';

const { Content } = Layout;
const InstructorAddCourse = () => {
  return (
    <Layout>
      <InstructorSidebar />
      <Content>
        <InstructorAddCourseForm />
        <InstructorAddedCoursesList />
      </Content>
    </Layout>
  );
};

export default InstructorAddCourse;
