import { Table } from 'antd';
import React from 'react';

const PurchasesTable = props => {
  const { purchases } = props;

  const columns = [
    {
      key: 'purchase_date',
      title: 'Purchase Date',
      dataIndex: 'purchase_date',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.purchase_date - b.purchase_date,
      render: text => (
        <a href="https://dashboard.stripe.com/payments/:id">{text}</a>
      ),
    },
    {
      key: 'parent_username',
      title: 'Parent Name',
      dataIndex: 'parent_username',
      sorter: (a, b) =>
        a.parent_username > b.parent_username
          ? 1
          : b.parent_username > a.parent_username
          ? -1
          : 0,
      render: text => (
        <a href="https://dashboard.stripe.com/payments/:id">{text}</a>
      ),
    },
    {
      key: 'program_name',
      title: 'Program Name',
      dataIndex: 'program_name',
      render: text => (
        <a href="https://dashboard.stripe.com/payments/:id">{text}</a>
      ),
      filters: [
        {
          text: <span>CoderCamp</span>,
          value: 'CoderCamp',
        },
        {
          text: <span>CoderSitters</span>,
          value: 'CoderSitters',
        },
        {
          text: <span>CoderYoga</span>,
          value: 'CoderYoga',
        },
      ],
      onFilter: (value, record) => record.program_name.startsWith(value),
      filterSearch: true,
      sorter: (a, b) =>
        a.program_name > b.program_name
          ? 1
          : b.program_name > a.program_name
          ? -1
          : 0,
    },
    {
      key: 'course_name',
      title: 'Course Name',
      dataIndex: 'course_name',
      sorter: (a, b) =>
        a.course_name > b.course_name
          ? 1
          : b.course_name > a.course_name
          ? -1
          : 0,
      render: text => (
        <a href="https://dashboard.stripe.com/payments/:id">{text}</a>
      ),
    },
    {
      key: 'seat_count',
      title: 'Seat Count',
      dataIndex: 'seat_count',
      sorter: (a, b) => a.seat_count - b.seat_count,
      render: text => (
        <a href="https://dashboard.stripe.com/payments/:id">{text}</a>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // part of Ant table functionality
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={purchases} onChange={onChange} />;
};

export default PurchasesTable;
