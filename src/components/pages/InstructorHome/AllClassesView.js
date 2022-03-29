import React from 'react';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import '../../../styles/InstructorStyles/index.less';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const { Content } = Layout;
const AllClasses = props => {
  console.log('props', props);
  return (
    <>
      <Layout>
        <InstructorSidebar />
        <Content>
          <h3>This is where all the classes will show up</h3>
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
