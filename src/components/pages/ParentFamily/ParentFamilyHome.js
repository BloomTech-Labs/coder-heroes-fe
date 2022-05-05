import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CreateNewStudent from './CreateNewStudent';
import '../../../styles/ParentStyles/index.less';
import {
  Layout,
  Modal,
  Button,
  Card,
  Avatar,
  Col,
  Row,
  Typography,
} from 'antd';
import 'antd/dist/antd.css';
import cloudbg from '../../../img/Assets/beige-faded-clouds.png';

const ParentFamilyHome = () => {
  const { Content } = Layout;
  const { Text } = Typography;
  const history = useHistory();
  const [setStudentInfo] = useState(null);
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
    <Content
      className="family-page-container"
      style={{
        backgroundImage: `url(${cloudbg})`,
      }} //background image here while troubleshooting LESS rendering issue
    >
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

      <Row className="family-cards">
        <Col span={8}>
          <Card className="parent-card">
            <div className="card-info">
              {/* // make dynamic with state management */}
              <Avatar
                className="avatar"
                src="https://joeschmoe.io/api/v1/random"
              />
              <Text className="card-name">Parent Name</Text>
              <Button
                className="parent-view-account-button parent-card"
                onClick={() => history.push('/parent')}
              >
                View Account
              </Button>
              <Button
                className="add-student-button"
                onClick={showAddStudentModal}
              >
                Add Student
              </Button>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="student-card">
            <div className="card-info">
              {/* make dynamic with state management */}
              <Avatar
                className="avatar"
                src="https://joeschmoe.io/api/v1/random"
              />
              <Text className="card-name">Student Name</Text>
              <Button
                className="student-view-account-button"
                onClick={() => history.push('/student')}
              >
                View Account
              </Button>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card className="student-card">
            <div className="card-info">
              {/* make dynamic with state management */}
              <Avatar
                className="avatar"
                src="https://joeschmoe.io/api/v1/random"
              />
              <Text className="card-name">Student Name</Text>
              <Button
                className="student-view-account-button"
                onClick={() => history.push('/student')}
              >
                View Account
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default ParentFamilyHome;
