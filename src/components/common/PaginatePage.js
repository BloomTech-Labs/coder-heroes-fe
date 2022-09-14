import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';

const PaginatePage = props => {
  const { numPerPage, onChange, data } = props;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numPerPage);

  const handlePageChange = value => {
    setMinValue((value - 1) * numPerPage);
    setMaxValue(value * numPerPage);
  };

  useEffect(() => {
    onChange(minValue, maxValue);
  }, [minValue]);

  return (
    <Pagination
      defaultCurrent={1}
      defaultPageSize={numPerPage}
      onChange={handlePageChange}
      total={data.length}
    />
  );
};

export default PaginatePage;
