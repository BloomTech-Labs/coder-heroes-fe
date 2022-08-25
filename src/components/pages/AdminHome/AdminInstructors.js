import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { dummyData } from '../../../dummyData';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import AdminActiveInstructors from './AdminActiveInstructors';

const instructorData = dummyData.instructor_data;

const initialInstructors = {
  instructor_id: instructorData[0].instructor_id,
  instructor_name: instructorData[0].instructor_name,
  user_id: instructorData[0].user_id,
  rating: instructorData[0].rating,
  approved: instructorData[0].approved,
  approved_by: instructorData[0].approved_by,
  instructor_bio: instructorData[0].instructor_bio,
  inbox: instructorData[0].inbox,
};

export default function InstructorsList() {
  const [instructors, setInstructors] = useState(initialInstructors);

  const history = useHistory();

  const ToggleInstructors = () => {
    setInstructors(!instructors);
  };

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />

      <Content>
        <div className="header-container">
          <div className="button-container">
            <button className="toggle-button" onClick={ToggleInstructors}>
              {' '}
              {!instructors ? 'Pending Instructors' : 'Active Instructors'}{' '}
            </button>
            {instructors ? (
              <h1>Pending Instructors</h1>
            ) : (
              <AdminActiveInstructors />
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
}
