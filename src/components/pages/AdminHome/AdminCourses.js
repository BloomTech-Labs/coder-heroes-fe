import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import CourseCard from './AdminCourseCard';
import { useDispatch, connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { Layout } from 'antd';
//TO-DO: Implement Auth0

// need to upgrade the courses router/modal to get the instructor name (2 seconds update in modal)

function AdminCourses(props) {
  const { courses } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push('/admin-add-course');
  };

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div className="table-container">
          <div className="header-container">
            <h1>Courses</h1>
          </div>
          <div className="courses-page-flex">
            <div className="courses-left">
              {/* placeholder for now - holding for universal component 
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 330,
                }}
              />*/}
            </div>
            <div className="courses-right">
              <button className="add-course" onClick={handleClick}>
                ADD COURSE
              </button>
            </div>
          </div>
          <div className="admin-courses-container">
            {courses.map(item => (
              <CourseCard key={item.course_id} course={item} />
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    courses: state.coursesReducer.courses,
  };
};

export default connect(mapStateToProps, {})(AdminCourses);
