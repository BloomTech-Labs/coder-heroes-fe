import React from 'react';

// components
import ExplorePrograms from './ExplorePrograms';
import CoderCamp from './CoderCamp';
import CoderSitters from './CoderSitters';
import CoderYoga from './CoderYoga';

// styling
import '../../../styles/ProgramsLandingStyles/index.less';
import { Layout } from 'antd';

export default function LandingPrograms() {
  return (
    <Layout className="pl__na__wrapper">
      <ExplorePrograms />
      <CoderCamp />
      <CoderSitters />
      <CoderYoga />
    </Layout>
  );
}
