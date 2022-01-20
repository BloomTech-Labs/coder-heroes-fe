import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../../../styles/InstructorStyles/index.less';

const NewsfeedPutModal =()=>{
    let navigate = useHistory();
    const [formValue, setformValue] = useState({
        link: '',
        description: '',
        title: ''
      });
    
      const handleChange = e => {
          setformValue({
              ...formValue,
              [e.target.name]: e.target.value,
            });    
      };
      console.log('git changes')
      const handleEdit =()=>{
        // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
        axios.put('Insertlinkhere',formValue)
        .then(resp=>{
            navigate('/instructor');
        })
        .catch(err=>{console.log(err);});
      };
      const handleDelete =()=>{
        // e.preventDefault(); i guess we dont need it ? I will remove comment when making final pull request
        axios.delete('Insertlinkhere',/* postid? */)
        .then(resp=>{
            navigate('/instructor');
        })
        .catch(err=>{console.log(err);});
      };
   
    return(
        <div className='newsfeedForm_container'>
                <div className='newsfeedForm_header'>
                    <h1>Create  New Post</h1>
                    <h2>x</h2>
                </div>
            <Form>
                <div className='newsfeedForm_input_container'>
                    <Form.Item
                        name={['Post Title']}
                        label="Post Title:"
                    >
                        <Input name='title' onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item name={['link']} label="Author Name:">
                        <Input name='link' onChange={handleChange}/>
                    </Form.Item>
                </div>
                <div className='newsfeedForm_inputfield'>
                    <Form.Item 
                        name={['Post Contents']} 
                        label="Post Contents:"
                    />
                    <Input.TextArea  
                        name='description'  
                        onChange={handleChange} 
                        className='newsfeedForm_inputfield_textarea' 
                    />
                </div>
                    <div className='newsfeedForm_editDeleteButton_container'>
                    <div className='newsfeedForm_editDeleteButton'>
                        <Button 
                            className='newsfeedForm_edit_button' 
                            type="primary" 
                            shape='round' 
                            htmlType="submit"
                            onClick={handleEdit}
                        >
                            Save Changes
                        </Button>
                        <Button 
                            className='newsfeedForm_delete_button' 
                            type="primary" 
                            shape='round' 
                            htmlType="submit"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </div>
                    </div>
            </Form>
        </div>
    );
};

export default NewsfeedPutModal;