import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/ClassroomStyles/index.less';
import { Card, Button, Layout, Row, Badge, Typography } from 'antd';
import StudentCard from './StudentCard';
import { connect, useDispatch } from 'react-redux';
import {
  getStudents,
  setCurrentStudentId,
} from '../../../redux/actions/classroomActions';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const Classroom = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  useEffect(() => {
    props.getStudents(idToken, props.course.course_id);
  }, []);

  const navigate = useHistory();

  const handleNavigate = e => {
    e.preventDefault();
    dispatch(setCurrentStudentId(parseInt(e.target.parentElement.value)));
    navigate.push('/feedback-badges');
  };

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="classroom__title">Classroom</Title>
          <div className="classroom__students">
            {props.course.students.map(student => (
              <>
                <StudentCard key={student.id} student={student} />
                <Button
                  className="classroom_feedback__button"
                  value={student.child_id}
                  onClick={handleNavigate}
                  key={Date.now()}
                >
                  GIVE FEEDBACK
                </Button>
              </>
            ))}
          </div>
          <Row className="feedback__badges">
            <Card className="classroom__feedback__summary">
              <h1>Summary of Feedback Badges</h1>
              <Row>
                <Badge count={7} className="student__card__badge"></Badge>
                <p>feedback badges have been given</p>
              </Row>
              <Row>
                <Badge count={1} className="student__card__badge"></Badge>
                <p>students lack any feedback badges</p>
              </Row>
            </Card>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    course: state.classroomReducer,
  };
};

export default connect(mapStateToProps, { getStudents, setCurrentStudentId })(
  Classroom
);
