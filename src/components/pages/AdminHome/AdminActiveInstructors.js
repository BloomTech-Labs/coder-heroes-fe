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

export default function AdminActiveInstructors() {
  return (
    <div>
      <h1>Active Instructors</h1>
      {dummyData.map(instructor => (
        <AdminInstructorCard
          name={instructor.name}
          bio={instructor.bio}
          status={instructor.status}
        />
      ))}
    </div>
  );
}
