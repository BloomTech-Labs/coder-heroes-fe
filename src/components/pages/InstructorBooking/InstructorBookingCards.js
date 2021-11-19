import React, { useState } from 'react';
import '../../../styles/index.less';
import InstructorBookingCardModal from './InstructorBookingCardModal';
import { connect } from 'react-redux';
import InstructorBookingCard from './InstructorBookingCard';

const InstructorBookingCards = props => {
  const { instructor } = props;
  const [currentModalProps, setCurrentModalProps] = useState(false);
  const [modalHidden, setModalHidden] = useState(true);
  console.log('InstructorBookingCards', modalHidden);

  const text = {
    when: 'When & Where: ',
    seize: 'Class Size: ',
    description: 'Description: ',
  };

  // if (currentModalProps !== false) {
  //   console.log('currentModalStatus not  equal to empty string');
  //   return (
  //     <InstructorBookingCardModal
  //       currentModalProps={currentModalProps}
  //       setCurrentModalProps={setCurrentModalProps}
  //       text={text}
  //     />
  //   );
  // }

  return (
    <>
      <div className="instructor-booking-div">
        <h2
          style={{
            fontSize: '2.5rem',
            color: '#ffca59',
            fontWeight: 'bold',
            margin: '3%',
          }}
        >
          Available Programs
        </h2>
        <div className="modal-container">
          <div className="courses-cards">
            {instructor.course_schedule.map(course => {
              return (
                <InstructorBookingCard
                  course={course}
                  text={text}
                  setCurrentModalProps={setCurrentModalProps}
                  setModalHidden={setModalHidden}
                  modalHidden={modalHidden}
                />
              );
            })}
          </div>
          <div
            className={`${
              modalHidden
                ? 'modal-overlay hide-modal'
                : 'modal-overlay show-modal'
            }`}
          >
            <InstructorBookingCardModal
              currentModalProps={currentModalProps}
              setCurrentModalProps={setCurrentModalProps}
              setModalHidden={setModalHidden}
              text={text}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};

export default connect(mapStateToProps, {})(InstructorBookingCards);
