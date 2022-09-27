import { Card, Radio } from 'antd';
import { useState, useEffect } from 'react';
import { parentDummyData } from '../../../parentDummyData';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// const defaultValues = {
//   program: '',
//   course: '',
//   date: '',
// };
const BookingProgram = ({ handleRadioClick, disabled }) => {
  const [index, setIndex] = useState(0);
  // const [userChoice, setUserChoice] = useState(defaultValues);
  // const [disabled, setDisabled] = useState(false);
  // const toggleDisabled = () => {
  //   setDisabled(!disabled);
  // };

  const subjectsArray = [
    ...new Set(
      parentDummyData.availableCourses.map(course => {
        return course.subject;
      })
    ),
  ];

  let selectProgramArray = subjectsArray.slice(index, index + 3);

  useEffect(() => {
    const lastIndex = subjectsArray.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, subjectsArray]);

  // const handleRadioClick = e => {
  //   setUserChoice({ program: e.target.value });
  //   console.log(userChoice);
  // };
  // const handleCalendarClick = e => {
  //   setUserChoice({ date: e.target.value });
  //   console.log(userChoice);
  // };

  // const handleTime = e => {
  //   setUserChoice({ time: e.target.value });
  //   console.log(userChoice);
  // };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button
          style={{ background: 'none' }}
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else if (index === 0) {
              setIndex(subjectsArray.length - 3);
            }
          }}
        >
          <LeftOutlined style={{ color: '#4a1e3c' }} />
        </button>

        <Radio.Group
          style={{
            width: '60vw',
            backgroundColor: '#eeedd9',
          }}
        >
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            {selectProgramArray.map((subject, index) => {
              return (
                <Card
                  style={{
                    padding: '5px 0 5px 5px',
                    background: '#f35f24',
                    alignItems: 'center',
                    minWidth: '250px',
                    flex: '1 ',
                    margin: '0 10px',
                  }}
                >
                  <Radio
                    onChange={handleRadioClick}
                    disabled={disabled}
                    value={subject}
                    key={index}
                    name="program"
                    style={{ fontSize: '20px' }}
                  >
                    {subject}
                  </Radio>
                </Card>
              );
            })}
          </div>
        </Radio.Group>

        <button
          style={{ background: 'none' }}
          onClick={() => {
            if (index !== subjectsArray.length - 3) {
              setIndex(index + 1);
            } else if (index === subjectsArray.length - 3) {
              setIndex(0);
            }
          }}
        >
          <RightOutlined style={{ color: '#4a1e3c', fontWeight: 'bold' }} />
        </button>
      </div>
    </>
  );
};

export default BookingProgram;

// const startTimes = parentDummyData.availableCourses.map(
//   time => time.start_time
// );

// const endTimes = parentDummyData.availableCourses.map(time => time.end_time);
// let durationArr = [];
// let duration = '';
// const [durations, setDurations] = useState([]);
// const generateDurationArr = () => {
//   for (let i = 0; i < endTimes.length; i++) {
//     let difference =
//       parseInt(endTimes[i][0] + endTimes[i][1]) -
//       parseInt(startTimes[i][0] + startTimes[i][1]);
//     duration += difference;
//     if (endTimes[i][3] !== '0' || startTimes[i][3] !== '0') {
//       duration += ' - ' + (difference + 1);
//     }
//     duration += ' hour(s)';
//     durationArr.push(duration);
//     duration = '';
//   }
//   setDurations(durationArr);
// };
// useEffect(() => {
//   generateDurationArr();
// }, [durationArr, endTimes, startTimes]);
