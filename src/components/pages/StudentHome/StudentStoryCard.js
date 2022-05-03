import React, { useState } from 'react';
import '../../../styles/StudentStyles/index.less';
import { connect } from 'react-redux';
import { Card } from 'antd';

function StudentStoryCard(prop) {
  return (
    <Card title="Teacher Name" className="student-story-card">
      <section className="top-left">
        <img src="https://via.placeholder.com/50" alt="placeholder"></img>
        <h3>Teacher Name</h3>
        <h4>Coder Heroes</h4>
      </section>
      <section className="top-right">
        <h4>9 Minutes Ago</h4>
      </section>
      <section className="teacher-message">
        <h4>Teacher message</h4>
        <p>URL</p>
      </section>
      <section className="story-photo">
        <img></img>
      </section>
      <section className="student-comment">
        <img></img>
        <h4>Student Name</h4>
        <p>Student Message</p>
        <h4>4 M</h4>
      </section>
      <section className="student-send-comment">
        <img></img>
        {/* Create field and form here*/}
      </section>
    </Card>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(StudentStoryCard);
