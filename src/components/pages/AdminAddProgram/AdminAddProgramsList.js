import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/AdminAddProgramStyles/AdminAddProgramsList.less';
import { List } from 'antd';
import AdminAddCoursesCard from './AdminAddProgramsCard';

function adminCoursesList(props) {
  const { program_list } = props;

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
            <AdminAddCoursesCard
              key={program.class_id}
              id={index}
              program={program}
            />
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
