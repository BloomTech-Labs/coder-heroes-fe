import React from 'react';
import InstructorProgram from './InstructorAddCourse';
import { connect } from 'react-redux';
import { List } from 'antd';

const InstructorProgramList = props => {
  const { programs } = props;

  return (
    <div>
      <h1 className="instructor-h1">Already Submitted Programs:</h1>
      <List className="instructor-list">
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
