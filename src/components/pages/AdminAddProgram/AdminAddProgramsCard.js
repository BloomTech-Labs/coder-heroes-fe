import { connect } from 'react-redux';
import '../../../styles/AdminAddProgramStyles/AdminAddProgramsCard.less';
import { Card, Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';
import { delClass, editClass } from '../../../redux/actions/adminActions';
import TextArea from 'antd/lib/input/TextArea';

let placeHolder = [];
let clear_string = '';
let formPrerequisite = '';

const initialFormValues = {
  class_name: '',
  class_subject: '',
  class_desc: '',
};

function AdminAddCoursesCard(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formPreReqs, setFormPreReqs] = useState({ prereq: '' });
  const { program } = props;

  let text = program.class_prereq_list.join(', ');

  const deleteClass = e => {
    e.preventDefault();
    document.getElementById('course_' + e.target.id).style.display = 'none';
    props.delClass(program.class_id);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    const merged = {
      ...formValues,
      class_prereq_list: placeHolder,
      class_id: program.class_id,
    };
    console.log(props.program_list);

    document.getElementById('pnum1_' + program.class_id).innerHTML =
      'Class Name: ' + merged.class_name;
    document.getElementById('pnum2_' + program.class_id).innerHTML =
      'Class Subject: ' + merged.subject;
    document.getElementById('pnum3_' + program.class_id).innerHTML =
      'Class Description: ' + merged.description;
    document.getElementById('pnum4_' + program.class_id).innerHTML =
      'Class Prerequisites: ' + merged.class_prereq_list;

    props.editClass(merged);
    setFormValues(initialFormValues);
    clearPrereq();
    setModalVisible(false);
  };

  const handleCancel = () => {
    clearPrereq();
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

  const addPrereq = () => {
    if (formPreReqs.prereq.length !== 0) {
      formPrerequisite = formPreReqs.prereq;
      placeHolder.push(formPrerequisite);
      buildString(formPrerequisite);
    }
  };

  const clearPrereq = () => {
    setFormPreReqs({ prereq: [] });
    placeHolder = [];
    clear_string = '';
    document.getElementById(
      'edit-prereq-render_' + +program.class_id
    ).innerHTML = clear_string;
  };

  const buildString = () => {
    let arrayText = placeHolder.join(', ');
    document.getElementById(
      'edit-prereq-render_' + +program.class_id
    ).innerHTML = arrayText;
  };

  return (
    <div id={'course_' + program.class_id}>
      <Card
        style={{
          overflowX: 'hidden',
          wordBreak: 'break-all',
          maxWidth: '100%',
          display: 'flex',
          border: '1px dotted black',
        }}
      >
        <p id={'pnum1_' + program.class_id}>Class Name: {program.class_name}</p>
        <p id={'pnum2_' + program.class_id}>
          Class Subject: {program.class_subject}
        </p>
        <p id={'pnum3_' + program.class_id}>
          Class Description: {program.class_desc}
        </p>
        <p id={'pnum4_' + program.class_id}>Class Prerequisites: {text}</p>
      </Card>
      <button
        id={program.class_id}
        style={{ width: '25%', height: 25 }}
        className="edit_program"
        onClick={showModal}
      >
        Edit
      </button>
      <Modal
        title={'Edit Program'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div style={{ display: 'flex' }}>
            <Button
              id={program.class_id}
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
            <Form.Item style={{ width: '70%' }}>
              <label htmlFor="prereq">Prerequisites: </label>
              <Input
                onChange={handleChange}
                value={formPreReqs.prereq}
                name="prereq"
              />
            </Form.Item>
            <div
              style={{ width: '25%', display: 'flex' }}
              className="buttons_div"
            >
              <Button
                className="button_submit_edit"
                style={{ width: '100%', height: 25 }}
                onClick={addPrereq}
              >
                Add
              </Button>
              <Button
                className="button_cancel_edit"
                style={{ width: '100%', height: 25 }}
                onClick={clearPrereq}
              >
                Clear
              </Button>
            </div>
          </div>
          <Card
            style={{ width: '100%', marginBottom: '7.5%', maxHeight: '100%' }}
            bodyStyle={{ maxHeight: 100, overflow: 'auto' }}
          >
            <p id={'edit-prereq-render_' + +program.class_id}></p>
          </Card>
        </Form>
      </Modal>
      <button
        id={program.class_id}
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

export default connect(mapStateToProps, { delClass, editClass })(
  AdminAddCoursesCard
);
