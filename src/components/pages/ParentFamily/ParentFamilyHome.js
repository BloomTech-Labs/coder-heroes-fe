import React, { useState, useEffect } from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import CreateNewStudent from './CreateNewStudent';
import '../../../styles/ParentStyles/index.less';
import { Layout, Modal, Button, Card, Avatar, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { getChildren } from '../../../redux/actions/parentActions';

const ParentFamilyHome = props => {
  const { Meta } = Card;
  const { Content } = Layout;
  const [addStudentVisible, setAddStudentVisible] = useState(false);
  const [addStudentConfirmLoading, setAddStudentConfirmLoading] = useState(
    false
  );
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  const { user, children } = props;

  useEffect(() => {
    dispatch(getChildren(idToken, user.profile_id));
  }, [dispatch, idToken, user.profile_id]);

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
    <Layout style={{ width: '100%' }}>
      <ParentSidebar />

      <Content>
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

        <h2 className="family-profile-title" style={{ color: '#6A0C49' }}>
          <strong>CHOOSE A PROFILE</strong>
        </h2>

        <Row gutter={16}>
          <Col span={8}>
            <Card style={{ width: 300 }} className="parent-card">
              <Meta
                avatar={<Avatar src={user.avatarUrl} />}
                title={user.name}
              />
              <Button className="parent-view-account-button">
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

          {children &&
            children.map(child => {
              return (
                <Col span={8} key={child.child_id}>
                  <Card style={{ width: 300 }} className="student-card">
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      } // avatar url for student not in backend
                      title={child.username}
                    />
                    <Button className="student-view-account-button">
                      VIEW ACCOUNT
                    </Button>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser,
    children: state.parentReducer.children,
  };
};

export default connect(mapStateToProps, { getChildren })(ParentFamilyHome);
