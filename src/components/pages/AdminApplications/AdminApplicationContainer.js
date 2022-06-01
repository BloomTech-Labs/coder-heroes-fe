import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import '../../../styles/AdminStyles/index.less';

const AdminApplicationsContainer = () => {
  return (
    <div className="cards">
      <Card className="pending-applications">
        <ClockCircleOutlined className="icon" />
        <p className="description">
          Enter here to locate a list of incoming instructor requests. Verify
          provided application details to ensure applicant meets our student
          instructor standards.
        </p>
        <Button className="button">View Pending</Button>
      </Card>

      <Card className="approved-applications">
        <CheckCircleOutlined className="icon" />
        <p className="description">
          Enter here to locate the full approved list of current student
          instructors. Select the dropdown to view expanded details about each
          accepted applicant.
        </p>
        <Button className="button">View Approved</Button>
      </Card>
    </div>
  );
};

export default AdminApplicationsContainer;
