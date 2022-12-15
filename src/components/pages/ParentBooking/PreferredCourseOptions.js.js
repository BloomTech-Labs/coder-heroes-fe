import React from 'react';
import { timeConverter } from '../../common/timeHelpers';

const PreferredCourseOptions = ({ searchResults, updateSelection }) => {
  const onChange = e => {
    const { value } = e.target;
    updateSelection(value);
  };

  return (
    <select defaultValue="" className="drop-down-container" onChange={onChange}>
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
