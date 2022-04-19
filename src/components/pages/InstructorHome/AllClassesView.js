import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import ClassCard from './ClassCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';

const { Content } = Layout;
const { Title } = Typography;
const AllClasses = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  console.log('props', props);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Courses</Title>
          <div className="class__subject">
            {props.courses.map(courses => (
              <ClassCard courses={courses} />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state, r) => {
  console.log(r);
  return {
    courses: state.coursesReducer.courses,
  };
};

export default connect(mapStateToProps, { getCourses })(AllClasses);
