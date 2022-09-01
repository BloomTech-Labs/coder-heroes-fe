import React from 'react';
import AdminInstructorCard from './AdminInstructorCard';

const dummyData = [
  {
    name: 'Mitch',
    bio: 'Mitch is totally awesome in every way. That much is undeniable',
    status: 'approved',
  },
  {
    name: 'Ben',
    bio: 'Ben is a pretty alright guy',
    status: 'pending',
  },
];

const pendingApps = dummyData.filter(
  instructor => instructor.status === 'pending'
);

export default function AdminPendingInstructors() {
  return (
    <div>
      <h1>Pending Instructors</h1>
      {pendingApps.map(instructor => (
        <AdminInstructorCard
          name={instructor.name}
          bio={instructor.bio}
          status={instructor.status}
        />
      ))}
    </div>
  );
}
