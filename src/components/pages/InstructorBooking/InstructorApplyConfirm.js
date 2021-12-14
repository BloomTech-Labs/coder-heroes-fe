import React from 'react';
import Banner from '../../common/Banner';
import { Layout } from 'antd';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
const { Content } = Layout;

const InstructorApplyConfirm = () => {
  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          <p>here we will have confirmation info</p>
          <p>maybe we can determine here if instructor is qualified?</p>
          <p>if qualified, maybe upload PPT/ class materials?</p>
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorApplyConfirm;
