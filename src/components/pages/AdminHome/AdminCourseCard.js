import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

export default function CourseCard(props) {
  const { course } = props;

  return (
    <div className="admin-course-card-container">
      <Card title={course.course_name}>
        Program Name: {course.program_name} <br />
        Instructor: {course.instructor}
        <br />
        Date: <br />
      </Card>
    </div>
  );
}
