import React, { useState } from 'react';
import { addCourse } from '../../../redux/actions/adminActions';
export default function AdminAddCourses() {
  return (
    <div>
      <button
        onClick={() => {
          addCourse();
        }}
      >
        reducer
      </button>
    </div>
  );
}
