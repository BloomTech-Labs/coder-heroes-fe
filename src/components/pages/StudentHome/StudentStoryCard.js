import React, { useState } from 'react';
import '../../../styles/StudentStyles/index.less';
import { connect } from 'react-redux';

function StudentStoryCard(prop) {
  return (
    <div className="student-story-card">
      <img src="https://via.placeholder.com/50" alt="placeholder"></img>
      <h3>Teacher Name</h3>
      <h4>Coder Heroes</h4>
      <h4>9 Minutes Ago</h4>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentStoryCard);
