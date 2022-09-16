import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import ClassCard from './ClassCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useDispatch } from 'react-redux';
import { setEditing } from '../../../redux/actions/coursesActions';
import { NavLink } from 'react-router-dom';
//TO-DO: Implement Auth0

//TO-DO: Implement Auth0
const { Content } = Layout;
const { Title } = Typography;

const AllClasses = props => {
  // const { idToken } = authState;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCourses(idToken));
  // }, [dispatch, idToken]);

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
            <NavLink to="/instructor-add-course">
              <button className="courseAdd_button">Add Course</button>
            </NavLink>
            <div className="courses_display">
              {props.courses.map(course => (
                <ClassCard
                  key={course.course_id}
                  course={course}
                  handleEditSelect={handleEditSelect}
                />
              ))}
            </div>
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
