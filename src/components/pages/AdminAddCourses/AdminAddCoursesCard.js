import { connect } from 'react-redux';
import '../../../styles/index.less';
import { Card, Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';
import { delClass, editClass } from '../../../redux/actions/adminActions';
import TextArea from 'antd/lib/input/TextArea';

let placeHolder = [];
let array_string = '';
let program_list = [];
let formPrerequisite = '';

const initialFormValues = {
  class_name: '',
  subject: '',
  description: '',
};

function AdminAddCoursesCard(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formPreReqs, setFormPreReqs] = useState({ prereq: '' });
  const { program, program_list } = props;
  let text = program.class_prereq_list.join(', ');

  const deleteClass = e => {
    e.preventDefault();
    document.getElementById('course_' + e.target.id).style.display = 'none';
    delClass(e.target.id);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = e => {
    editClass(e.target.id);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleChange = e => {
    if (e.target.name !== 'prereq') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === 'prereq') {
      setFormPreReqs({
        ...formPreReqs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addPrereq = e => {
    if (formPreReqs.prereq.length !== 0) {
      formPrerequisite = formPreReqs.prereq;
      placeHolder.push(formPrerequisite);
      buildString(formPrerequisite);
    }
  };

  const clearPrereq = () => {
    setFormPreReqs({ prereq: [] });
    placeHolder = [];
    array_string = '';
    document.getElementById('edit-prereq-render').innerHTML = array_string;
  };

  const buildString = item => {
    let arrayText = placeHolder.join(', ');
    document.getElementById('edit-prereq-render').innerHTML = arrayText;
  };

  return (
    <div id={'course_' + props.id}>
      <Card style={{ border: '1px dotted black' }}>
        <p>Class Name: {program.class_name}</p>
        <p>Class Subject: {program.class_subject}</p>
        <p>Class Description: {program.class_desc}</p>
        <p>Class Prerequisites: {text}</p>
      </Card>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="edit_program"
        onClick={showModal}
      >
        Edit
      </button>
      <Modal
        title={'Edit ' + program.class_name}
        visible={isModalVisible}
        footer={[
          <div style={{ display: 'flex' }}>
            <Button
              id={props.id}
              onClick={handleOk}
              key="submit"
              htmlType="submit"
            >
              Submit Edit
            </Button>
            <Button onClick={handleCancel} key="cancel" htmlType="cancel">
              Cancel
            </Button>
          </div>,
        ]}
      >
        <Form wrapperCol={{ span: 50 }} layout="horizontal">
          <Form.Item>
            <label htmlFor="className">Class Name: </label>
            <Input
              onChange={handleChange}
              value={formValues.class_name}
              name="class_name"
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="other">Subject: </label>
            <Input
              onChange={handleChange}
              value={formValues.subject}
              name="subject"
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="description">Description: </label>
            <TextArea
              onChange={handleChange}
              type="text"
              style={{ height: 100, resize: 'none' }}
              value={formValues.description}
              name="description"
            />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            className="prereq-split-container"
          >
            <Form.Item style={{ width: '65%' }}>
              <label htmlFor="prereq">Prerequisites: </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <div style={{ display: 'block' }} className="buttons_div">
              <button
                style={{ width: '50%', height: 25 }}
                className="prereq_add_button"
                onClick={addPrereq}
              >
                Add
              </button>
              <button
                style={{ width: '50%', height: 25 }}
                className="prereq_add_button"
                onClick={clearPrereq}
              >
                Clear
              </button>
            </div>
          </div>
          <Card
            style={{ width: '100%', marginBottom: '7.5%', maxHeight: '100%' }}
            bodyStyle={{ maxHeight: 100, overflow: 'auto' }}
          >
            <p id="edit-prereq-render"></p>
          </Card>
        </Form>
      </Modal>
      <button
        id={props.id}
        style={{ width: '25%', height: 25 }}
        className="delete_program"
        onClick={deleteClass}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps, { editClass })(AdminAddCoursesCard);
