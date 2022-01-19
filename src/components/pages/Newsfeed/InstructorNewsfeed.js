import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const InstructorNewsfeed =()=>{
    let navigate = useHistory();
    const [formValue, setformValue] = useState({
        link: '',
        description: '',
        title: ''
      });
    
      const handleChange = e => {
          console.log(e.target.value);
          console.log(e.target.name);
          setformValue({
              ...formValue,
              [e.target.name]: e.target.value,
            });
            
      };
      const handleSubmit =()=>{
        // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
        axios.post('Insertlinkhere',formValue)
        .then(resp=>{
            navigate(`/insertRedirectpagehere`);
        })
        .catch(err=>{console.log(err);});
      };
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 10,
        },
      };
    return(
        <Form onFinish={handleSubmit}>
            <Form.Item
                name={['title']}
                label="title"
            >
                <Input name='title' onChange={handleChange}/>
            </Form.Item>

            <Form.Item name={['link']} label="link">
                <Input name='link' onChange={handleChange}/>
            </Form.Item>

            <Form.Item name={['description']} label="description">
                <Input.TextArea  name='description'  onChange={handleChange} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default InstructorNewsfeed;