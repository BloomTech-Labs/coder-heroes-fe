import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from './InstructorSidebar';
import { Layout } from 'antd';
import CourseCard from '../AdminHome/AdminCourseCard';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/instructorActions';
import { connect } from 'react-redux';
//import AdminAddCoursesForm from '../AdminHome/AdminAddCoursesForm.js'
//The above import will be used to add the add courses form, currently being developed in ticket BL-868

const { Content } = Layout;
const InstructorHome = props => {
  const { courses } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const idToken = "stub";

  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  const handleClick = () => {
    history.push('/admin-add-course');
  };

  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <div className="table-container">
            <div className="courses-page-flex">
              <div className="courses-right">
                <button className="add-course" onClick={handleClick}>
                  ADD COURSE
                </button>
              </div>
            </div>
            <div className="admin-courses-container">
              {courses.map(course => (
                <CourseCard key={course.course_id} course={course} />
              ))}
            </div>
          </div>
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
