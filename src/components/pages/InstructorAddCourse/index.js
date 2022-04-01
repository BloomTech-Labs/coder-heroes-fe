// This 'Add Course' funcitonality should only appear on instructor sidebar

import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import InstructorAddedCoursesList from './InstructorAddedCoursesList';
import { Layout } from 'antd';
import Banner from '../../common/Banner';
import InstructorAddCourseForm from './InstructorAddCourseForm';

const { Content } = Layout;
const InstructorAddCourse = () => {
  return (
    <Layout>
      <InstructorSidebar />
      <Content>
        <Banner />
        <InstructorAddedCoursesList />
        <InstructorAddCourseForm />
      </Content>
    </Layout>
  );
};

export default InstructorAddCourse;
