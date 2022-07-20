import React from 'react';
import { Layout } from 'antd';
import CourseDescriptionComponent from './CourseDescriptionComponent';

const { Content } = Layout;
const CourseDescription = () => {
  return (
    <div>
      <Content>
        <CourseDescriptionComponent />
        {/* Other Dashboard Components */}
      </Content>
    </div>
  );
};

export default CourseDescription;
