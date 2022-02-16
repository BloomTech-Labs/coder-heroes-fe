import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Form } from 'antd';
import axiosWithAuth from '../../../utils/axiosWithAuth';

export default function AdminEditClassesCard() {
  const [classes, setClasses] = useState();

  // useEffect(() => {
  //     axiosWithAuth().get(`/class-types`)
  //       .then(resp => {
  //         console.log('use effect', resp.data);
  //         setClasses(resp.data);
  //       })
  //       .catch(err => {
  //         console.error(err);
  //       });
  //   }, []);

  return <div></div>;
}
