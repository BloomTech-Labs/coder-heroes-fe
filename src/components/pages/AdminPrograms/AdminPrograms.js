import { useState, useEffect } from 'react';
import { Layout, Button, Badge, Modal } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import AdminSidebar from '../AdminHome/AdminSidebar';
import AdminCoursesModal from './AdminCoursesModal';

import '../../../styles/AdminDashboardHome/index.less';

function AdminPrograms(props) {
  const [courses, setCourses] = useState(props.courses.courses);

  const [showCourses, setShowCourses] = useState(false);

  const showModal = () => setShowCourses(true);
  const hideModal = () => setShowCourses(false);

  const { Content } = Layout;
  useEffect(() => {
    console.log(courses);
  }, []);

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div id="programs-header">
          <h3>Programs</h3>
          <Badge offset={[30, 0]} count={4} color={'red'}>
            <Button onClick={showModal} icon={<FileDoneOutlined />}>
              Manage Courses
            </Button>
          </Badge>
        </div>
      </Content>
      <Modal
        title={'Pending'}
        visible={showCourses}
        open={true}
        onOk={hideModal}
        onCancel={hideModal}
        centered={true}
      >
        <input type="text" placeholder="Search..." />
        <button>Filter</button>
        {courses.map(item => {
          return (
            <div className="course-modal-item">
              <p>{item.course_name} </p>
              <p>{item.program_id} </p>
              <p>{item.max_size} </p>
              <p>{item.instructor_id} </p>
            </div>
          );
        })}
      </Modal>
    </Layout>
  );
}

function mapStateToProps(state) {
  return { courses: state.coursesReducer };
}

export default connect(mapStateToProps)(AdminPrograms);
