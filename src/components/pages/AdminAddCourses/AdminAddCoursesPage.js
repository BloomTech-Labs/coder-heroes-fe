import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from './actions';
import '../../../styles/index.less';
import { Input, Form, Card, Affix } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import AdminAddCourses from './AdminAddCourses';
// import AdminCoursesCards from '/'

export default function AdminCourses() {
  return (
    <div className="admin-add-courses-page">
      <div className="admin-add-courses-left">
        <AdminAddCourses />
      </div>
      <div className="admin-add-courses-right"></div>
    </div>
  );
}
