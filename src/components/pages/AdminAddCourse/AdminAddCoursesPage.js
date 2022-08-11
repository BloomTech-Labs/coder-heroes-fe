import React from 'react';

import { connect } from 'react-redux';
import '../../../styles/AdminAddCoursesStyles/AdminAddCoursesPage.less';

import AdminAddCoursesForm from './AdminAddCoursesForm';
// import AdminAddCoursesList from './AdminAddCoursesList';

function AdminAddCoursesPage(props) {
  return (
    <div className="admin-add-courses-page" style={{ display: 'flex' }}>
      <div className="admin-add-courses-left">
        <AdminAddCoursesForm editClass={props.changeClass} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps)(AdminAddCoursesPage);
