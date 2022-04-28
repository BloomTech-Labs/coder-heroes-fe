import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import CreateNewStudent from './CreateNewStudent';
import '../../../styles/ParentStyles/index.less';
import { Layout, Modal, Button, Card, Avatar, Col, Row } from 'antd';
import 'antd/dist/antd.css';

//IMG_F8DE6E5E167E-1.jpeg
const ParentFamilyHome = () => {
  const { Meta } = Card;
  const { Content } = Layout;
  const [studentInfo, setStudentInfo] = useState(null);
  const [addStudentVisible, setAddStudentVisible] = useState(false);
  const [addStudentConfirmLoading, setAddStudentConfirmLoading] = useState(
    false
  );

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(`okta-token-storage`));
    const config = {
      headers: { Authorization: `Bearer ${token.idToken.value}` },
    };
    axios
      .get(`https://coder-heroes-api.herokuapp.com/parent/1/Studentren`, config)
      .then(res => {
        const familyData = res.data;
        setStudentInfo(familyData);
        console.log(familyData);
      })
      .catch(err => {
        console.log(`error fetching axios call`);
      });
  }, []);

  const showAddStudentModal = () => {
    setAddStudentVisible(true);
  };

  const handleAddStudentOk = () => {
    setAddStudentConfirmLoading(true);
    setTimeout(() => {
      setAddStudentVisible(false);
      setAddStudentConfirmLoading(false);
    }, 2000);
  };

  const handleAddStudentCancel = () => {
    setAddStudentVisible(false);
  };

  return (
    <Layout>
      <ParentSidebar />
      <Content className="family-page-container">
        <Banner />
        <Modal
          title="Add Student"
          visible={addStudentVisible}
          onOk={handleAddStudentOk}
          confirmLoading={addStudentConfirmLoading}
          onCancel={handleAddStudentCancel}
          footer={null}
        >
          <CreateNewStudent />
        </Modal>

        <Row gutter={16} className="family-cards">
          <Col span={8}>
            <Card className="parent-card">
              <Meta
                className="parent-card"
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} // make dynamic with state management
                title="Parent Name"
              />
              <Button className="parent-view-account-button parent-card ">
                VIEW ACCOUNT
              </Button>
              <Button
                className="add-student-button"
                onClick={showAddStudentModal}
              >
                ADD STUDENT
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card className="student-card">
              <Meta
                className="student-card"
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} // make dynamic with state management
                title="Student Name"
              />
              <Button className="student-view-account-button">
                VIEW ACCOUNT
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card className="student-card">
              <Meta
                className="student-card"
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} // make dynamic with state management
                title="Student Name"
              />
              <Button className="student-view-account-button">
                VIEW ACCOUNT
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ParentFamilyHome;

//  style={{ width: 300 }}
