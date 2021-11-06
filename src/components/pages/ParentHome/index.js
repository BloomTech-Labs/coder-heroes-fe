import React, { useState } from 'react';
import ChildrenList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';
import { dummyData } from '../../../dummyData';

function ParentHome() {
  const [scheduleData, setScheduleData] = useState(dummyData);
  return (
    <div className="App">
      <ChildrenList />
      <ParentCalendar schedule={scheduleData}></ParentCalendar>
      <ParentSidebar />
    </div>
  );
}

export default ParentHome;
