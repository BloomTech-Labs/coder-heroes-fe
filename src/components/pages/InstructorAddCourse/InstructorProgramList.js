import React from 'react';
import InstructorProgram from './InstructorProgram';
import { connect } from 'react-redux';
import { List } from 'antd';

const InstructorProgramList = props => {
  const { programs } = props;

  return (
    <div>
      <h1>Already Submitted Programs:</h1>
      <List className="instructor-booking-card">
        {programs.own_programs &&
          programs.own_programs.map(program => {
            return <InstructorProgram key={program.id} program={program} />;
          })}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return { programs: state.instructorReducer };
};

export default connect(mapStateToProps, {})(InstructorProgramList);

//styles for the card original
// style={{ display: 'flex', justifyContent: 'center' }}

//style for h1
// style={{
//   marginBottom: 10,
//   fontSize: 20,
//   display: 'flex',
//   justifyContent: 'center',
// }}
