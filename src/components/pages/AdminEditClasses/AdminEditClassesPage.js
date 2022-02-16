import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Form } from 'antd';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { connect } from 'react-redux';

const initialClassData = {
  class_id: '',
  class_name: '',
  class_subject: '',
  class_desc: '',
  class_prereq_list: [],
};

const AdminEditClassesPage = props => {
  const [classes, setClasses] = useState(initialClassData);

  const handleChange = e => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return <div></div>;
};
const mapStateToProps = state => {};

export default connect(mapStateToProps)(AdminEditClassesPage);
