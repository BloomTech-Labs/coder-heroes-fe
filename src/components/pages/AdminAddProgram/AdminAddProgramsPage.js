import React from 'react';

import { connect } from 'react-redux';
import '../../../styles/index.less';

import AdminAddCourses from './AdminAddPrograms';
import AdminAddCoursesList from './AdminAddProgramsList';

function AdminCourses(props) {
  return (
    <div className="admin-add-courses-page" style={{ display: 'flex' }}>
      <div className="admin-add-courses-left">
        <AdminAddCourses editClass={props.changeClass} />
      </div>
      <div className="admin-add-courses-right">
        <AdminAddCoursesList />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps)(AdminCourses);
