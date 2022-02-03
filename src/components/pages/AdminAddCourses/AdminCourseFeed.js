import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/oktaConfig';
import '../../../styles/index.less';

export default function AdminCourseFeed() {
  const [courses, setCourses] = useState([]);
  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };
  useEffect(() => {
    axiosWithAuth()
      .get(`https://coder-heroes-api.herokuapp.com/course-types`, config)
      .then(resp => {
        console.log('use effect', resp.data);
        setCourses(resp.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: 30, marginLeft: 30, fontSize: 20 }}>
        Already Submitted Programs:
      </h1>
      <div className="admin-course-feed-container">
        {courses.map(course => {
          const { subject, description, prereq } = course;
          return (
            <div className="submitted-course-container">
              <h1>Subject: {subject}</h1>
              <h2>Description: {description}</h2>
              <h3>Prerequisites: {prereq}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
