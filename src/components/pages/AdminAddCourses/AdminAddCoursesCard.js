import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Card } from 'antd';

function AdminAddCoursesCard(props) {
  const { program } = props;
  let text = program.class_prereq_list.join(', ');

  return (
    <Card style={{ border: '1px dotted black' }}>
      <p>Class Name: {program.class_name}</p>
      <p>Class Subject: {program.class_subject}</p>
      <p>Class Description: {program.class_desc}</p>
      <p>Class Prerequisites: {text}</p>
    </Card>
  );
}

export default AdminAddCoursesCard;
