import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

export default function CourseCard(props) {
  const { courses } = props;

  return (
    <div className="admin-course-card-container">
      <Card title={courses.course_name} />
    </div>
  );
}
