import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Card, List } from 'antd';
import AdminAddCoursesCard from './AdminAddCoursesCard';

function adminCoursesList(props) {
  const { program_list } = props;

  // const deleteClass = (course_id) => {
  //   // program_list.splice(e.target.id, 1);
  //   // console.log(program_list);
  //   program_list.splice(course_id, 1);
  //   console.log(program_list);
  // };

  // const editClass = (e) => {
  //   console.log(e.target.id);
  // };

  return (
    <div
      className="add-courses-form-container"
      style={{
        height: '75vh',
        border: '1px solid black',
        maxHeight: '75vh',
        overflow: 'auto',
      }}
    >
      <List>
        {program_list.map((program, index) => {
          return (
            <AdminAddCoursesCard key={index} id={index} program={program} />
          );
        })}
      </List>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps)(adminCoursesList);
