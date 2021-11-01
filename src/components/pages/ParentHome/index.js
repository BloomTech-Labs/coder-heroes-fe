import React from 'react';
import ChildList from './ChildrenList';
import ParentCalendar from './ParentCalendar';
import ParentSidebar from './ParentSidebar';

function ParentHome() {
  return (
    <div className="App">
      <ChildList></ChildList>
      <ParentCalendar></ParentCalendar>
      <ParentSidebar></ParentSidebar>
    </div>
  );
}

export default ParentHome;
