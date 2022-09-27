import { Result } from 'antd';
import React, { useState } from 'react';
import { timeConverter } from '../../common/timeHelpers';

const PreferredCourseOptions = ({
  searchResults,
  selectedOption,
  updateSelection,
}) => {
  const onChange = e => {
    const name = e.target.name;
    const { value } = e.target;
    updateSelection(name, value);
  };
  let choice;

  return (
    <select
      className="drop-down-container"
      style={{
        fontSize: '20px',
        width: 'auto',
        padding: '10px',
        margin: '6px',
        borderRadius: '15px',
        backgroundColor: 'rgba(58,201,176,0.8)',
        color: '#680049',
        textAlign: 'center',
      }}
      onChange={onChange}
      value={selectedOption}
      name="available"
      // onChange={e => {
      //   setSelectedOption(e.target.value);
      // }}
      // value={selectedOption}
    >
      {searchResults.map((result, index) => {
        if (index === 0) {
          return <option className="drop-down">{result}</option>;
        } else {
          return (
            <option className="drop-down" onChange={onChange}>
              {`${result.subject} begins ${result.start_date} at
          ${timeConverter(result.start_time)}`}
            </option>
          );
        }
      })}
      ;
    </select>
  );
};

export default PreferredCourseOptions;
