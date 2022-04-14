import React, { useEffect } from 'react';
import InstructorSidebar from './InstructorSidebar';
import CourseCard from './CourseCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/instructorActions';
import { useOktaAuth } from '@okta/okta-react';

const { Content } = Layout;
const { Title } = Typography;

const AllCourses = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  useEffect(() => {
    props.getCourses(idToken);
  }, []);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Courses</Title>
          <div className="class__subject">
            {props.courses.map(course => (
              <CourseCard course={course} />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    courses: state.instructorReducer.courses,
  };
};

export default connect(mapStateToProps, { getCourses })(AllCourses);
