import { Card, Radio } from 'antd';
import { useState, useEffect } from 'react';
import { parentDummyData } from '../../../parentDummyData';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const BookingProgram = ({ handleRadioClick, disabled }) => {
  const [index, setIndex] = useState(0);

  // we used set to remove the duplicate courses in the dummy data but when it is connected to the backend it shouldn't have duplicates
  // remove set when connected

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

  return (
    <>
      <div className="select-program-container">
        <button
          className="arrow-btns"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else if (index === 0) {
              setIndex(subjectsArray.length - 3);
            }
          }}
        >
          <LeftOutlined className="arrows-icon" />
        </button>

        <Radio.Group className="radio-group">
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            {selectProgramArray.map((subject, index) => {
              return (
                <Card key={index} className="select-program-cards">
                  <Radio
                    className="radio-btn"
                    onChange={handleRadioClick}
                    disabled={disabled}
                    value={subject}
                    key={index}
                    name="program"
                  >
                    {subject}
                  </Radio>
                </Card>
              );
            })}
          </div>
        </Radio.Group>

        <button
          className="arrow-btns"
          onClick={() => {
            if (index !== subjectsArray.length - 3) {
              setIndex(index + 1);
            } else if (index === subjectsArray.length - 3) {
              setIndex(0);
            }
          }}
        >
          <RightOutlined className="arrows-icon" />
        </button>
      </div>
    </>
  );
};

export default BookingProgram;
