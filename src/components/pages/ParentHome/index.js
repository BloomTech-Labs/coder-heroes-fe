import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';

function ParentHome() {
  const [parentData, setParentData] = useState(dummyData);
  const [scheduleData, setScheduleData] = useState(dummyData);
  return (
    <div className="App">
      <ChildrenList children={parentData}></ChildrenList>
      <ParentCalendar schedule={scheduleData}></ParentCalendar>
      <ParentSidebar></ParentSidebar>
    </div>
  );
}

export default ParentHome;
