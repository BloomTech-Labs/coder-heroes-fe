import React from 'react';
import AdminInstructorCard from './AdminInstructorCard';

export default function AdminActiveInstructors({ instructors }) {
  return (
    <div>
      <h1>Active Instructors</h1>
      {instructors.map(instructor => (
        <AdminInstructorCard
          name={instructor.name}
          bio={instructor.bio}
          status={instructor.status === 'false' ? 'Pending' : 'Approved'}
        />
      ))}
    </div>
  );
}
