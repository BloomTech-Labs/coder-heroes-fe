import React from 'react';
import SearchInstructors from './SearchInstructors';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import '../../../styles/index.less';
import { Layout } from 'antd';

const LandingInstructor = () => {
  return (
    <Layout className="il__wrapper">
      <SearchInstructors />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};

export default LandingInstructor;
