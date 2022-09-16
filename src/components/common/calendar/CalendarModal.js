import React from 'react';
import { Modal, Form, Input, Button, DatePicker, TimePicker } from 'antd';
import axiosWithAuth from '../../../utils/axiosWithAuth';

export default function CalendarModal(props) {
  const { isModalVisible, setIsModalVisible, setEventFlag } = props;

  const [form] = Form.useForm();

  //TO-DO: Implement Auth0
  // const { authState } = useOktaAuth();
  // const { idToken } = authState;

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = values => {
    const newEvent = {
      ...values,
      date: values.date.format('MM/DD/YYYY'),
      time: values.time.format('h:mm A'),
      type: 'success',
    };
    //TO-DO: Implement Auth0
    axiosWithAuth('hi')
      .post('/calendar-events', newEvent)
      .then(() => setEventFlag(true))
      .catch(err => console.error(err));
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {};

  return (
    <>
      <Modal
        title="Add Event"
        visible={isModalVisible}
        onCancel={handleCancel}
        getContainer={false}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 'success' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Event Title"
            name="content"
            rules={[
              { required: true, message: 'Please input an event title!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please pick a date!' }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: 'Please pick a time!' }]}
          >
            <TimePicker use12Hours format="h:mm A" minuteStep={15} />
          </Form.Item>

          <Form.Item
            label="Details"
            name="details"
            rules={[
              { required: true, message: "Please input this event's details!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="calendar-event-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
