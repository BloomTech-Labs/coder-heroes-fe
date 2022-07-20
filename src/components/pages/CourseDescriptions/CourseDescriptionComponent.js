import React from 'react';
import { Card, Button } from 'antd';
import '../../../styles/BookingStyles/CourseDescriptionStyles.less';
import avatar from '../../../styles/BookingStyles/assets/Avatar07.png';

//const { Content } = Layout;

function CourseDescriptionComponent() {
  return (
    <div className="course-page">
      <div className="page-title">
        <img className="image" src={avatar} alt="Student" />

        <div className="title-container">
          <h1>Course Descriptions</h1>
        </div>
      </div>
      <div className="card-container">
        <Card
          className="description-card"
          title="CoderYoga"
          style={{
            border: true,
            borderStyle: 'solid',
            borderColor: 'red',
          }}
          headStyle={{
            backgroundColor: '#9FB222',
            height: '129px',
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '22px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>

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
          headStyle={{
            backgroundColor: '#FEAD2A',
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
          headStyle={{
            backgroundColor: '#B9E3D0',
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
