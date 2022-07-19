import React from 'react';
import { Layout } from 'antd';
import CourseDescriptionComponent from './CourseDescriptionComponent';

const { Content } = Layout;
const CourseDescription = () => {
  return (
    <div>
      <Layout>
        <Content>
          <CourseDescriptionComponent />
          {/* Other Dashboard Components */}
        </Content>
      </Layout>
    </div>
  );
};

export default CourseDescription;
