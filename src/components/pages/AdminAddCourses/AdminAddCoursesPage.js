import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Input, Form, Card, Affix } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AdminAddCourses from './AdminAddCourses';
import AdminAddCoursesList from './AdminAddCoursesList';

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
