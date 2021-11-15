import React, { useState } from 'react';
import '../../../styles/index.less';
import InstructorBookingCardModal from './InstructorBookingCardModal';
import { connect } from 'react-redux';
import InstructorBookingCard from './InstructorBookingCard';

const InstructorBookingCards = props => {
  const { instructor } = props;
  const [currentModalProps, setCurrentModalProps] = useState(false);
  console.log('sajdab', currentModalProps);

  const text = {
    when: 'When & Where: ',
    seize: 'Class Size: ',
    description: 'Description: ',
  };

  if (currentModalProps === false) {
    console.log('currentModalStatus not  equal to empty string');
    return (
      <InstructorBookingCardModal
        currentModalProps={currentModalProps}
        text={text}
      />
    );
  }
  console.log('no if statement');
  return (
    <section id="coursesCards">
      {instructor.course_schedule.map(course => {
        return (
          <InstructorBookingCard
            course={course}
            text={text}
            setCurrentModalProps={setCurrentModalProps}
          />
        );
      })}
    </section>
  );
};
const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps, {})(InstructorBookingCards);
