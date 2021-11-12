import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { connect } from 'react-redux';
import '../../../styles/index.less';

const { Meta } = Card;

function InstructorProfile(props) {
  const { instructor } = props;
  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={
        <img
          alt="example"
          src="https://i.pinimg.com/474x/db/32/23/db32232ee849096679c32d3392a87694.jpg"
        />
      }
    >
      <Button type="primary" block>
        <div>
          <h3>Instructor info</h3>
        </div>
      </Button>

      <p>Rating: {instructor.rating}</p>
      <p>Bio: {instructor.instructor_bio}</p>
    </Card>
  );
}

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps)(InstructorProfile);
