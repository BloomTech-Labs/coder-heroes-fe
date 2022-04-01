import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import ClassCard from './ClassCard';
import '../../../styles/InstructorStyles/index.less';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { dummyData } from '../../../dummyData';

const { Content } = Layout;
const { Title } = Typography;
const AllClasses = props => {
  console.log('props', props);
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Title className="class__title">Classes</Title>
          <div className="class__subject">
            {dummyData.own_programs.map(courses => (
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

export default connect(mapStateToProps, {})(AllClasses);
