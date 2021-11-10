import React, { useState, useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import '../../../styles/index.less';
import { connect } from 'react-redux';
import CourseDetails from './CourseDetails';

const InstructorCalender = props => {
  const { instructor } = props;
  const [course, setCourse] = useState(
    instructor.course_schedule.map(currentCourse => currentCourse)
  ); // Entire course / schedule objects inside of 1 array
  const [courseDates, setCourseDates] = useState(
    instructor.course_schedule.map(course => course.start_date.split('-'))
  ); // An array, of arrays.  index 0 is month, 1 is day, 2 is year
  const [courseDetails, setCourseDetails] = useState(null); // This is passed to the courseDetails.  May be able to replace using id lookup in course local state?  It is a singular object that is set by on click event in calendar to display that courses information.

  function getListData(value) {
    let listData = []; // This needs to initialize as empty array so we can spread it on line 23.

    // Here we're mapping over the dates of each course.  We keep track of the index we're looking at currently.
    // 1. If the current day matches value.date, it must mean this course is for the day we called getListData with.
    // 2. If the days match, we need to update listData for that day.  We grab the courses subject from course state using the index.  Indexes will always match.
    // 3. Important to note listdata is spread here to include the possibility of multiple courses occuring on one day.
    // IMPORTANT: This maps for EVERY month for this day.  How can we handle specific months? - Done
    courseDates.forEach((currentCourse, index) => {
      if (
        parseInt(currentCourse[1], 10) === value.date() &&
        value.month() + 1 === parseInt(currentCourse[0], 10)
      ) {
        //Needs to be +1 because month indexing starts at 0
        listData = [
          ...listData,
          {
            type: 'success',
            content: course[index].subject,
            id: course[index].id,
          },
        ];
      }
    });
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value); //called for each rendered cell component (42 odd times?).  Whatever is returned is rendered for that specific day.

    function showCourseInfo(evt) {
      course.forEach(currentCourse => {
        if (currentCourse.id === parseInt(evt.target.id, 10)) {
          setCourseDetails(currentCourse);
        }
      });
    }

    return (
      <ul className="events">
        {listData.map(item => (
          <li id={item.id} key={item.id} onClick={evt => showCourseInfo(evt)}>
            {' '}
            {/** Need to find a better way to add onClick event.  Right now it's not properly attached to the text inside of calender.  It's slightly below it */}
            <Badge id={item.id} status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <section className="site-calendar-demo-card">
        <Calendar dateCellRender={dateCellRender} />
      </section>

      {courseDetails ? <CourseDetails course={courseDetails} /> : null}
    </>
  );
};

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};
export default connect(mapStateToProps)(InstructorCalender);
