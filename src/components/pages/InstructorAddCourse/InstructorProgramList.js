import React from 'react';
import InstructorProgram from './InstructorProgram';
import { connect } from 'react-redux';
import { List } from 'antd';

const InstructorProgramList = props => {
  const { programs } = props;
  console.log(props.programs.own_programs);
  //const [currentProgram, setCurrentProgram] = useState(props.programs.own_programs);
  //console.log(currentProgram)
  // useEffect(() => {
  //     setCurrentProgram(programs.own_programs);
  //     }, []);

  return (
    <div>
      <h1
        style={{
          marginBottom: 10,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Already Submitted Programs:
      </h1>
      <List style={{ display: 'flex', justifyContent: 'center' }}>
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
