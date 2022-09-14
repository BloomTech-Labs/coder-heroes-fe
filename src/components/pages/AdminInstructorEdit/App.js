import React /*,{ useState }*/ from 'react';
//import { Navigate } from 'react-router-dom';
import Banner from '../../common/Banner';
import AdminSidebar from '../AdminHome/AdminSidebar';
import '../../../styles/ParentStyles/index.less';
import InstructorCards from './InstructorCards';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const EditInstructor = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar active="instructor" />
      <Content className="edit-instructor-container">
        <Banner />
        <InstructorCards />
      </Content>
    </Layout>
  );
};

export default EditInstructor;
