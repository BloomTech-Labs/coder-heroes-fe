import React from 'react';
import { Card, Button } from 'antd';

function CourseDescriptionComponent() {
  return (
    <div>
      <div classname="top-image">
        <div classname="img-container">
          <img classname="img" src="" />
        </div>
        <div classname="title-container">
          <h1>Course Descriptions</h1>
        </div>
      </div>
      <div classname="card-container">
        <Card
          className="description-card"
          title="CoderYoga"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
            border: true,
            borderStyle: 'solid',
            borderColor: 'red',
          }}
          headStyle={{
            backgroundColor: 'black',
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <Button className="bttn" type="primary">
            Register Now
          </Button>
        </Card>
        <Card
          className="description-card"
          title="CodeSitters"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <Button className="bttn" type="primary">
            Register Now
          </Button>
        </Card>
        <Card
          className="description-card"
          title="CoderCamp"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <Button className="bttn" type="primary">
            Register Now
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default CourseDescriptionComponent;
