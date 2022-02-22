import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Card, Button } from 'antd';
import React, { useState } from 'react';
import { delClass, editClass } from '../../../redux/actions/adminActions';

function AdminAddCoursesCard(props) {
  const { program, program_list } = props;
  let text = program.class_prereq_list.join(', ');

  const deleteClass = e => {
    e.preventDefault();
    document.getElementById('course_' + e.target.id).style.display = 'none';
    delClass(e.target.id);
  };

  const sendIndex = e => {};

  return (
    <div id={'course_' + props.id}>
      <Card style={{ border: '1px dotted black' }}>
        <p>Class Name: {program.class_name}</p>
        <p>Class Subject: {program.class_subject}</p>
        <p>Class Description: {program.class_desc}</p>
        <p>Class Prerequisites: {text}</p>
      </Card>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="edit_program"
        onClick={sendIndex}
      >
        Edit
      </button>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="delete_program"
        onClick={deleteClass}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { editClass })(AdminAddCoursesCard);
