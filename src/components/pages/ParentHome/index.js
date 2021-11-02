import React, { useState } from 'react';
import ChildList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';

function ParentHome() {
  const [parentData, setParentData] = useState(dummyData);
  return (
    <div className="App">
      <ChildList children={parentData}></ChildList>
      <ParentCalendar></ParentCalendar>
      <ParentSidebar></ParentSidebar>
    </div>
  );
}

export default ParentHome;
