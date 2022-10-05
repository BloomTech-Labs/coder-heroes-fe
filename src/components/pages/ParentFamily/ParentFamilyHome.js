import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  Alert,
  Typography,
} from 'antd';
import 'antd/dist/antd.css';
import cloudbg from '../../../img/Assets/beige-faded-clouds.png';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { getChildren } from '../../../redux/actions/parentActions';

const ParentFamilyHome = props => {
  const { Meta } = Card;
  const { Content } = Layout;
  const { Text } = Typography;
  const history = useHistory();

  const [addStudentVisible, setAddStudentVisible] = useState(false);
  const [addStudentConfirmLoading, setAddStudentConfirmLoading] = useState(
    false
  );
  const [alertMsg, setAlertMsg] = useState(0);

  const { authState } = useOktaAuth();
  const { idToken } = authState.idToken;

  const dispatch = useDispatch();
  const { user, children } = props;

  useEffect(() => {
    // TODO: In the following line, "4" is hardcoded instead of profile_id because currently profile_id is not being passed along in props.user . profile_id 4 exists in our seeds, so it has been hardcoded to display the existing seeded child. currentUser is initializing as empty object {} and is not being updated. When this is fixed, change the hardcoded "4" to "profile_id" and it should work.
    dispatch(getChildren(idToken, 4));
  }, [dispatch, idToken]);

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
    <>
      {/* <ParentSidebar /> */}
      <Content
        className="family-page-container"
        style={{
          backgroundImage: `url(${cloudbg})`,
        }} //background image here while troubleshooting LESS rendering issue
      >
        {/* <Banner /> */}

        {alertMsg === 1 && (
          <Alert
            type="success"
            message="Congrats!"
            description="You have successfully created a new student."
            showIcon
            closable
          />
        )}
        {alertMsg === 2 && (
          <Alert
            type="error"
            message="Oops!"
            description="Something went wrong when trying to create a new student. Please try again later."
            showIcon
            closable
          />
        )}

        <Modal
          title="Add Student"
          visible={addStudentVisible}
          onOk={handleAddStudentOk}
          confirmLoading={addStudentConfirmLoading}
          onCancel={handleAddStudentCancel}
          footer={null}
        >
          <CreateNewStudent
            setAddStudentVisible={setAddStudentVisible}
            setAlertMsg={setAlertMsg}
          />
        </Modal>

        <Row className="family-cards">
          <Col span={8}>
            <Card className="parent-card">
              <div className="card-info">
                <Avatar className="avatar" src={user.avatarUrl} />
                <Text className="card-name">{user.name}</Text>
                <Button
                  className="parent-view-account-button"
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

          {children &&
            children.map(child => {
              return (
                <Col span={8} key={child.child_id}>
                  <Card className="student-card">
                    <Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      } // avatar url for student not in backend
                      title={child.username}
                    />
                    <Button
                      className="student-view-account-button"
                      onClick={() => history.push('/student')}
                    >
                      View Account
                    </Button>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Content>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser,
    children: state.parentReducer.children,
  };
};

export default connect(mapStateToProps, { getChildren })(ParentFamilyHome);
