import React from 'react';
import InstructorSidebar from './InstructorSidebar';
import CourseCard from './CourseCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { dummyData } from '../../../dummyData';
import { getCourses } from '../../../redux/actions/instructorActions';

const { Content } = Layout;
const { Title } = Typography;

const AllCourses = props => {
  console.log('props', props);
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Courses</Title>
          <div className="class__subject">
            {/* {dummyData.own_programs.map(courses => (
              <CourseCard courses={courses} />
            ))} */}
            <p>hodere</p>
          </div>
        </Content>
      </Layout>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     courses: state.instructorReducer.courses,
//   };
// };
const mapStateToProps = state => {
  console.log('state', state);
  return null;
};

export default connect(mapStateToProps, { getCourses })(AllCourses);
