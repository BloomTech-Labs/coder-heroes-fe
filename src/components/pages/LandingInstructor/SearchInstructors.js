import React, { useState } from 'react';
import { Row, Col, Typography, Input, Select, Layout, Form } from 'antd';
import '../../../styles/index.less';

import { StudentIcon, TeacherIcon, CalendarIcon } from './Icons';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Item } = Form;
const { Option } = Select;

const SearchInstructors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Layout className="instructor-landing-top">
      <Content className="instructor-landing-topSection-topContent">
        <Title style={{ fontSize: '3rem' }}>ONLINE CODER INSTRUCTORS</Title>
        <Text style={{ fontSize: '1.4rem' }}>
          Proven Instructors to help your student
          <br />
          get personalized support in coding.
        </Text>
        <Form
          className="instructor-landing-topSection-form"
          size={'large'}
          layout="inline"
        >
          <Input.Group compact>
            <Item name={'search'} noStyle>
              <Input
                className="instructor-landing-topSection-input"
                style={{ border: '2px solid #9DA7AB' }}
                placeholder="Search for an Instructor by Name, or leave blank"
                allowClear
                name="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </Item>
            <Item name={'speciality'}>
              <Select
                style={{ border: '1px solid #9DA7AB' }}
                className="instructor-landing-topSection-select"
                placeholder="Choose a Specialty"
                allowClear
              >
                <Option value="Python">Python</Option>
                <Option value="Javascript">Javascript</Option>
                <Option value="HTML/CSS">HTML/CSS</Option>
                <Option value="Java">Java</Option>
                <Option value="NodeJS">NodeJS</Option>
              </Select>
            </Item>
            <Item name={'availability'}>
              <Select
                style={{ border: '1px solid #9DA7AB' }}
                className="instructor-landing-topSection-select"
                placeholder="Filter by Availability"
                allowClear
              >
                <Option value="mornings">Mornings</Option>
                <Option value="evenings">Evenings</Option>
                <Option value="nights">Nights</Option>
                <Option value="weekends">Weekends</Option>
              </Select>
            </Item>
            <Item>
              <button className="custom-btn" type="submit">
                FIND TUTOR
              </button>
            </Item>
          </Input.Group>
        </Form>
      </Content>
      <Content className="instructor-landing-topSection-bottomContent">
        <Row gutter={6}>
          <Col span={8}>
            <div className="instructor-landing-topSection-bottomContent-info">
              <div className="info-circle-icon">
                <StudentIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title level={4}>STUDENTS FIRST</Title>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                We believe all students deserve to have access to quality
                instructors that teach code and lifelong skills. We put students
                at the forefront of our mission.
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="instructor-landing-topSection-bottomContent-info">
              <div className="info-circle-icon">
                <TeacherIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title level={4}>QUALITY INSTRUCTION</Title>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Our super tutors offer quality instruction at a wide variety of
                skill sets, age ranges, and formats. We make coding fun!
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="instructor-landing-topSection-bottomContent-info">
              <div className="info-circle-icon">
                <CalendarIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title level={4}>AVAILABLE SCHEDULING</Title>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Online tutors are available to help your student receive
                guidance to fit your schedule and preferences.
              </Text>
            </div>
          </Col>
        </Row>
        <Row gutter={6}>
          <Col span={8}>
            <button className="custom-btn2">BROWSE INSTRUCTORS</button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SearchInstructors;
