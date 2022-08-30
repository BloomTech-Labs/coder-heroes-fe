import React, { useState } from 'react';

import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';
import { addCourse, editCourse } from '../../../redux/actions/coursesActions';
import '../../../styles/AdminAddCoursesStyles/AdminAddCoursesPage.less';

import AdminAddCoursesForm from './AdminAddCoursesForm';
import { Button } from 'antd';
// import AdminAddCoursesList from './AdminAddCoursesList';

function AdminAddCoursesPage(props) {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = course => {
    if (!course.course_id) {
      // dispatch(addCourse(idToken, course));
      console.log(course);
    }
    if (course.course_id) {
      dispatch(editCourse(idToken, course));
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
