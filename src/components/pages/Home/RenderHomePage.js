import React from 'react';
import { Link } from 'react-router-dom';

function RenderHomePage(props) {
  const { userInfo } = props;
  return (
    <div className="whole">
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <div className="button-container">
          <button>
            <Link to="/instructor">Instructor Dashboard</Link>
          </button>
          <button>
            <Link to="/parent">Parent Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default RenderHomePage;
