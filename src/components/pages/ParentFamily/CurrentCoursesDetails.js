import React, { useEffect } from 'react';
import { Table } from 'antd';
import '../../../styles/ParentStyles/index.less';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/childAction';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
//TO-DO: Implement Auth0

const { Column } = Table;

const CurrentCoursesDetails = props => {
  const dispatch = useDispatch();
  const { courses, child_id } = props;

  //TO-DO: Implement Auth0 - getCourses
  useEffect(() => {
    dispatch(getCourses(child_id));
  }, [dispatch, child_id]);

  return (
    <div className="current-courses-details-container">
      <Table className="current-courses-details-modal" dataSource={courses}>
        <Column title="Course Name" dataIndex="course_name" key="course_name" />
        <Column
          title="Instructor Name"
          dataIndex="instructor_name"
          key="instructor_name"
        />
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return { courses: state.childReducer.courses };
};

export default connect(mapStateToProps, { getCourses })(CurrentCoursesDetails);
