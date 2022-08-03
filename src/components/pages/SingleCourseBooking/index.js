import React from 'react';
import { Layout } from 'antd';
import '../../../styles/index.less';
import { SingleCourseBookingComponent } from './SingleCourseBookingComponent';

const { Content } = Layout;

function SingleCourseBooking() {
  return (
    <Layout className="news-feed-page">
      <Content>
        <SingleCourseBookingComponent />
      </Content>
    </Layout>
  );
}

export default SingleCourseBooking;
