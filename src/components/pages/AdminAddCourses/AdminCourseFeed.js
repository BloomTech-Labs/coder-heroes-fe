import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminCourseFeed() {
  const [courses, setCourses] = useState([]);
  const token = JSON.parse(localStorage.getItem('okta-token-storage'));
  const config = {
    headers: { Authorization: `Bearer ${token.idToken.value}` },
  };
  useEffect(() => {
    axios
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
      {courses.map(course => {
        const { subject, description, prereq } = course;
        return (
          <div>
            <h1>{subject}</h1>
            <h2>{description}</h2>
            <h3>{prereq}</h3>
          </div>
        );
      })}
    </div>
  );
}
