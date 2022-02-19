import React from 'react';
import SearchInstructors from './SearchInstructors';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import '../../../styles/index.less';
import {
  Row,
  Col,
  Typography,
  Avatar,
  Input,
  Select,
  Button,
  Card,
  Layout,
  Form,
} from 'antd';

const LandingInstructor = () => {
  return (
    <Layout className="instructor-landing-wrapper">
      <SearchInstructors />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};

export default LandingInstructor;
