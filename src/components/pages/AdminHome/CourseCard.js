import React, { useState } from 'react';
import { Card } from 'antd';

const initialCourse = [
  {
    subject: 'Javascript',
    program: 'codesitters',
    desc: 'Javascript course',
  },
  {
    subject: 'Python',
    program: 'codesitters',
    desc: 'Javascript course',
  },
  {
    subject: 'Java',
    program: 'codesitters',
    desc: 'Javascript course',
  },
];

const CourseCard = () => {
  const [courses, SetCourses] = useState(initialCourse);
  console.log(courses);

  return courses.map(course => {
    return (
      <Card
        style={{
          width: '100%',
          backgroundColor: '#FCDFAA',
          marginBottom: '2%',
        }}
      >
        <p>
          Course Subject: <span>{course.subject}</span>
        </p>
        <p>
          Program: <span>{course.program}</span>
        </p>
        <p>
          Program Description: <span>{course.desc}</span>
        </p>
      </Card>
    );
  });
};

export default CourseCard;
