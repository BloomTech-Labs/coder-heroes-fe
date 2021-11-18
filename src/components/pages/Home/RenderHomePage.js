import React from 'react';
import { Link } from 'react-router-dom';

function RenderHomePage(props) {
  const { userInfo } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/instructor">Instructor Dashboard</Link>
        </p>
        <p>
          <Link to="/parent">Parent Dashboard</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
