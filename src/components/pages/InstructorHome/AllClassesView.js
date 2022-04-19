import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import ClassCard from './ClassCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';
import { setEditing } from '../../../redux/actions/coursesActions';

const { Content } = Layout;
const { Title } = Typography;
const AllClasses = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  const handleEditSelect = id => {
    setEditing(id);
  };

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Courses</Title>
          <div className="class__subject">
            {props.courses.map(courses => (
              <ClassCard
                courses={courses}
                handleEditSelect={handleEditSelect}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.coursesReducer.courses,
    editing: state.coursesReducer.editing,
  };
};

export default connect(mapStateToProps, { getCourses })(AllClasses);
