import React from 'react';
import AdminInstructorCard from './AdminInstructorCard';

export default function AdminPendingInstructors({ instructors }) {
  const pendingApps = instructors.filter(
    instructor => instructor.status === 'false'
  );

  return (
    <div>
      <h1>Pending Instructors</h1>
      {pendingApps.map(instructor => (
        <AdminInstructorCard
          name={instructor.name}
          bio={instructor.bio}
          status={instructor.status === 'false' ? 'Pending' : 'Approved'}
        />
      ))}
    </div>
  );
}
