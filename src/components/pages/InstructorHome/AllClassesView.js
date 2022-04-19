import React, { useEffect } from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import ClassCard from './ClassCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { getCourses } from '../../../redux/actions/coursesActions';
import { useOktaAuth } from '@okta/okta-react';

const { Content } = Layout;
const { Title } = Typography;
const AllClasses = props => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;

  useEffect(() => {
    getCourses(idToken);
  }, [idToken]);

  console.log('props', props);

  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Classes</Title>
          <div className="class__subject">
            {props.classes.map(courses => (
              <ClassCard courses={courses} />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.instructorReducer.classes,
  };
};

export default connect(mapStateToProps, { getCourses })(AllClasses);
