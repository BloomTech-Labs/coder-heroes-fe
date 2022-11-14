import { useState, useEffect } from 'react';
import { Layout, Button, Badge, Modal } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import AdminSidebar from '../AdminHome/AdminSidebar';

function AdminPrograms() {
  const [showCourses, setShowCourses] = useState(false);

  const showModal = () => setShowCourses(!showCourses);
  const hideModal = () => setShowCourses(false);

  const { Content } = Layout;
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
        <div hidden={!showCourses}>
          <p>i still exist i promise</p>
        </div>
      </Content>

      {/* Depending on whether showing "pending" or "approved" -> change title to reflect that */}
      {/* <Modal
        title={'Courses'}
        visible={showCourses}
        open={true}
        onOk={hideModal}
        onCancel={hideModal}
        centered={true}
      >
        <p>to be added</p>
      </Modal> */}
    </Layout>
  );
}

export default AdminPrograms;
