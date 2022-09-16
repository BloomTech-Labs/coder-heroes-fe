import React, { useState } from 'react';
import { Row, Col, Typography, Input, Select, Layout, Form } from 'antd';
import '../../../styles/index.less';
import { StudentIcon, TeacherIcon, CalendarIcon } from './Icons';
import { getInstructor } from '../../../redux/actions/instructorActions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//TO-DO: Implement Auth0
const { Content } = Layout;
const { Title, Text } = Typography;
const { Item } = Form;
const { Option } = Select;

const SearchInstructors = props => {
  const dispatch = useDispatch();
  // const { idToken } = authState;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    dispatch(getInstructor(idToken));
  };

  return (
    <Layout className="il__top">
      <Content className="il__top__topContent">
        <div className="il__top__topContent__container">
          <div className="il__top__topContent__main">
            <Title
              className="il__heading il__top__topContent__heading"
              level={2}
            >
              ONLINE CODER INSTRUCTORS
            </Title>
            <Text className="il__top__topContent__text">
              Proven Instructors to help your student
              <br />
              get personalized support in coding.
            </Text>
            <Form className="il__top__form" size={'large'} layout="inline">
              <Input.Group compact>
                <Item name={'search'} noStyle>
                  <Input
                    className="il__top__input"
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
                    placeholder="Filter by Availability"
                    allowClear
                  >
                    <Option value="morning">Morning</Option>
                    <Option value="afternoon">Afternoon</Option>
                    <Option value="night">Night</Option>
                    <Option value="weekends">Weekends</Option>
                  </Select>
                </Item>
                <button
                  className="il__top__formBtn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  FIND TUTOR
                </button>
              </Input.Group>
            </Form>
            <div>
              {props.instructors.map(instructor => (
                <div key={instructor.instructor_id}>
                  Instructor name:{instructor.name} Rating:{instructor.rating}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
      <Content className="il__top__bottomContent">
        <Row>
          <Col xs={24} lg={8}>
            <div className="il__top__bottomContent__info">
              <div className="il__top__bottomContent__info__iconCircle">
                <StudentIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title
                style={{
                  fontSize: '1.5rem',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: '#263E47',
                }}
                className="il__heading il__heading_inner"
              >
                STUDENTS FIRST
              </Title>
              <Text className="il__top__bottomContent__info__text">
                We believe all students deserve to have access to quality
                instructors that teach code and lifelong skills. We put students
                at the forefront of our mission.
              </Text>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="il__top__bottomContent__info">
              <div className="il__top__bottomContent__info__iconCircle">
                <TeacherIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title
                style={{
                  fontSize: '1.5rem',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: '#263E47',
                }}
                className="il__heading il__heading_inner"
              >
                QUALITY INSTRUCTION
              </Title>
              <Text className="il__top__bottomContent__info__text">
                Our super tutors offer quality instruction at a wide variety of
                skill sets, age ranges, and formats. We make coding fun!
              </Text>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="il__top__bottomContent__info">
              <div className="il__top__bottomContent__info__iconCircle">
                <CalendarIcon style={{ color: 'white', fontSize: 100 }} />
              </div>
              <Title
                style={{
                  fontSize: '1.5rem',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  color: '#263E47',
                }}
                className="il__heading il__heading_inner"
              >
                AVAILABLE SCHEDULING
              </Title>
              <Text className="il__top__bottomContent__info__text">
                Online tutors are available to help your student receive
                guidance to fit your schedule and preferences.
              </Text>
            </div>
          </Col>
        </Row>
        <div className="il__browseBtn__container il__heading_inner">
          <button className="il__browseBtn">BROWSE INSTRUCTORS</button>
        </div>
      </Content>
    </Layout>
  );
};
const mapStateToProps = state => {
  return {
    instructors: state.instructorReducer.instructors,
  };
};

export default connect(mapStateToProps)(SearchInstructors);
