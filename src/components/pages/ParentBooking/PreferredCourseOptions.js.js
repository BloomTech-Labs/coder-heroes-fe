import React from 'react';
import { timeConverter } from '../../common/timeHelpers';

const PreferredCourseOptions = ({ searchResults, updateSelection }) => {
  const onChange = e => {
    const { value } = e.target;
    updateSelection(value);
  };

  return (
    <select
      defaultValue=""
      className="drop-down-container"
      // style={{
      //   fontSize: '20px',
      //   width: 'auto',
      //   padding: '10px',
      //   margin: '6px',
      //   borderRadius: '15px',
      //   backgroundColor: 'rgba(58,201,176,0.8)',
      //   color: '#680049',
      //   textAlign: 'center',
      // }}
      onChange={onChange}
    >
      <option value="" disabled>
        --Select Course--
      </option>
      {searchResults.map((result, index) => {
        return (
          <option key={index} className="drop-down" onChange={onChange}>
            {`${result.subject} begins ${result.start_date} at
          ${timeConverter(result.start_time)}`}
          </option>
        );
      })}
      ;
    </select>
  );
};

export default PreferredCourseOptions;
