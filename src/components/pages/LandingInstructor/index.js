import React from 'react';
import SearchInstructors from './SearchInstructors';
import HowItWorks from './HowItWorks';
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
      <Layout className="instructor-landing-middleSection"></Layout>
      <Layout className="instructor-landing-bottomSection"></Layout>
    </Layout>
  );
};

export default LandingInstructor;
