import React, { useEffect } from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import { Layout } from 'antd';
import CourseCard from '../AdminHome/AdminCourseCard';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';

const { Content } = Layout;
const InstructorHome = props => {
  const { courses } = props;
  const dispatch = useDispatch();
  const idToken = useOktaAuth().oktaAuth.getIdToken();

  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          {courses.map(course => (
            <CourseCard key={course.course_id} course={course} />
          ))}
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.instructorReducer.courses,
  };
};
export default connect(mapStateToProps, {})(InstructorHome);
