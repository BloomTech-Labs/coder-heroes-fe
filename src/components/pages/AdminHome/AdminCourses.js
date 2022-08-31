import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { connect } from 'react-redux';
import CourseCard from './AdminCourseCard';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';
import { Layout, Input } from 'antd';
const { Search } = Input;

// need to upgrade the courses router/modal to get the instructor name (2 seconds update in modal)

function AdminCourses(props) {
  const { courses } = props;
  const dispatch = useDispatch();
  const idToken = useOktaAuth().oktaAuth.getIdToken();

  useEffect(() => {
    dispatch(getCourses(idToken));
  }, [dispatch, idToken]);

  const history = useHistory();

  const handleClick = () => {
    history.push('/admin-add-course');
  };
  const onSearch = searchTerm => {
    console.log(searchTerm);
    courses.find(item => item === searchTerm);
  };

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div class="table-container">
          <div class="header-container">
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
                  width: 250,
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
