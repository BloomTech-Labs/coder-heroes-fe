import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Card, Button } from 'antd';
import React, { useState } from 'react';

function AdminAddCoursesCard(props) {
  const { program, program_list } = props;
  let text = program.class_prereq_list.join(', ');

  const deleteClass = e => {
    document.getElementById(e.target.id).remove();
    program_list.splice(e.target.id, 1);
  };

  return (
    <div id={props.id}>
      <Card style={{ border: '1px dotted black' }}>
        <p>Class Name: {program.class_name}</p>
        <p>Class Subject: {program.class_subject}</p>
        <p>Class Description: {program.class_desc}</p>
        <p>Class Prerequisites: {text}</p>
      </Card>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="delete_program"
      >
        Edit
      </button>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="edit_program"
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

export default connect(mapStateToProps)(AdminAddCoursesCard);
