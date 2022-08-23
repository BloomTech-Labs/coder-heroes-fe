import React, { useState } from 'react';
import { Card } from 'antd';
import axios from 'axios';

const initialApplications = [
  {
    name: 'John',
    date: '05/23/2022',
    bio: 'Hi im John',
  },
  {
    name: 'Paul',
    date: '08/25/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2019',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2021',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2022',
    bio: 'Javascript course',
  },
  {
    name: 'James',
    date: '08/15/2021',
    bio: 'Javascript course',
  },
  {
    name: 'Eleven',
    date: '08/15/2020',
    bio: 'Javascript course',
  },
];

const ApplicationCard = () => {
  const [applications, SetApplications] = useState(initialApplications);

  const sorted = applications.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const firstTen = sorted.slice(0, 10);

  return firstTen.map(app => {
    return (
      <Card
        style={{
          width: '100%',
          backgroundColor: '#FCDFAA',
          marginBottom: '2%',
        }}
      >
        <p>
          Name: <span>{app.name}</span>
        </p>
        <p>
          Date: <span>{app.date}</span>
        </p>
        <p>
          Bio: <span>{app.bio}</span>
        </p>
      </Card>
    );
  });
};

export default ApplicationCard;
