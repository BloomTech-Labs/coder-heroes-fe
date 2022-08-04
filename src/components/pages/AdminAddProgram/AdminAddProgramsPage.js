import React from 'react';

import { connect } from 'react-redux';
import '../../../styles/AdminAddProgramStyles/AdminAddProgramsPage.less';

import AdminAddCourses from './AdminAddPrograms';

function AdminCourses(props) {
  return (
    <div className="admin-add-courses-page" style={{ display: 'flex' }}>
      <div className="admin-add-courses-left">
        <AdminAddCourses editClass={props.changeClass} />
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
