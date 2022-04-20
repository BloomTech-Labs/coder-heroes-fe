import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import CreateNewStudent from './CreateNewStudent';
import '../../../styles/ParentStyles/index.less';
import { Layout, Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const ParentFamilyHome = () => {
  const { Content, Sider } = Layout;
  const [studentInfo, setStudentInfo] = useState(null); //eslint-disable-line
  const [addChildVisible, setAddChildVisible] = useState(false);
  const [addChildConfirmLoading, setAddChildConfirmLoading] = useState(false);
  const [addChildModalText, setAddChildModalText] = useState(
    <CreateNewStudent />
  );

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(`okta-token-storage`));
    const config = {
      headers: { Authorization: `Bearer ${token.idToken.value}` },
    };
    axios
      .get(`https://coder-heroes-api.herokuapp.com/parent/1/children`, config)
      .then(res => {
        const familyData = res.data;
        setStudentInfo(familyData);
      })
      .catch(err => {
        console.log(`error fetching axios call`);
      });
  }, []);

  const showAddChildModal = () => {
    setAddChildVisible(true);
  };

  const handleAddChildOk = () => {
    setAddChildModalText(<CreateNewStudent />);
    setAddChildConfirmLoading(true);
    setTimeout(() => {
      setAddChildVisible(false);
      setAddChildConfirmLoading(false);
    }, 2000);
  };

  const handleAddChildCancel = () => {
    setAddChildVisible(false);
  };

  return (
    <div className="family-page-container">
      <Layout style={{ width: '100%' }}>
        <Sider collapsible theme="light">
          <div style={{ display: 'flex', justifyContent: 'center' }} />
          <ParentSidebar />
        </Sider>
        <Content>
          <Banner />
          <Modal
            title="Add Child"
            visible={addChildVisible}
            onOk={handleAddChildOk}
            confirmLoading={addChildConfirmLoading}
            onCancel={handleAddChildCancel}
          >
            {addChildModalText}
          </Modal>
          <div className="profile-select-titles" style={{ color: '#6A0C49' }}>
            <strong>PICK A PROFILE TO ACCESS</strong>
          </div>
          <div className="profile-card-container">
            <div className="profile-card-containers">
              <div className="profile-avatars" />
              <div className="profile-select-titles">Parent Name</div>
              <Button className="profile-select-button">VIEW ACCOUNT</Button>
              <Button className="add-child-button" onClick={showAddChildModal}>
                ADD CHILD
              </Button>
            </div>
            <div className="profile-card-containers">
              <div className="profile-avatars" />
              <div className="profile-select-titles">Student Name</div>
              <Button className="profile-select-button">VIEW ACCOUNT</Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ParentFamilyHome;
