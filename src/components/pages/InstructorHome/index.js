import React from 'react';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import InstructorProfile from './InstructorProfile';
import { dummyData } from '../../../dummyData';

const InstructorHome = () => {
  return (
    <div>
      <InstructorSidebar />
      <InstructorCalender dummyData={dummyData.courses} />
      <InstructorProfile dummyData={dummyData.instructor} />
    </div>
  );
};

export default InstructorHome;
