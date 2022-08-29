import React, { useState } from 'react';

import { connect } from 'react-redux';
import '../../../styles/AdminAddCoursesStyles/AdminAddCoursesPage.less';

import AdminAddCoursesForm from './AdminAddCoursesForm';
import { Button } from 'antd';
// import AdminAddCoursesList from './AdminAddCoursesList';

function AdminAddCoursesPage(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = course => {
    if (!course.course_id) {
      //axios.post('/', course)
      console.log('course posted', course);
    }
    if (course.course_id) {
      //axios.put(`/${course_id}`, course)
      console.log('couse updated', course);
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="admin-add-courses-page" style={{ display: 'flex' }}>
      <div className="admin-add-courses-left">
        <Button type="primary" onClick={showModal}>
          Add New Course
        </Button>
        <AdminAddCoursesForm
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
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
