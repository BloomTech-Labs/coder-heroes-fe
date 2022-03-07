import React from 'react';

// components
import ExplorePrograms from './ExplorePrograms';
import CoderCamp from './CoderCamp';
import CoderSitters from './CoderSitters';
import CoderYoga from './CoderYoga';

// styling
import { Layout } from 'antd';

export default function LandingPrograms() {
  return (
    <Layout>
      <ExplorePrograms />
      <CoderCamp />
      <CoderSitters />
      <CoderYoga />
    </Layout>
  );
}
