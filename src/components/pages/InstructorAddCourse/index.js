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
        {/* not necessary to have the added course list unless it is an 
        option for instructor to see? maybe a link at the bottom to see pending/approved programs?
        <InstructorAddedCoursesList /> */}
        <InstructorAddCourseForm />
      </Content>
    </Layout>
  );
};

export default InstructorAddCourse;
