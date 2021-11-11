import React from 'react';
import { Calendar, Badge } from 'antd';
import '../../../styles/index.less';
import { connect } from 'react-redux';
import { setSelectedCourse } from '../../../redux/actions/instructorActions';

const InstructorCalender = props => {
  const { instructor } = props;

  function getListData(value) {
    let listData = [];

    // Here we're mapping over the dates of each course.  We keep track of the index we're looking at currently.
    // 1. If the current day matches value.date, it must mean this course is for the day we called getListData with.
    // 2. If the days match, we need to update listData for that day.  We grab the courses subject from course state using the index.  Indexes will always match.
    // 3. Important to note listdata is spread here to include the possibility of multiple courses occuring on one day.
    instructor.course_schedule.forEach(currentCourse => {
      if (
        parseInt(currentCourse.start_date.split('-')[1], 10) === value.date() &&
        value.month() + 1 ===
          parseInt(currentCourse.start_date.split('-')[0], 10)
      ) {
        //Needs to be +1 because month indexing starts at 0
        listData = [
          ...listData,
          {
            type: 'success',
            content: currentCourse.subject,
            id: currentCourse.id,
          },
        ];
      }
    });
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value); //called for each rendered cell component (42 odd times?).  Whatever is returned is rendered for that specific day.

    function showCourseInfo(evt) {
      instructor.course_schedule.forEach(currentCourse => {
        if (currentCourse.id === parseInt(evt.target.id, 10)) {
          props.setSelectedCourse(currentCourse);
        }
      });
    }

    return (
      <ul className="events">
        {listData.map(item => (
          <li id={item.id} key={item.id} onClick={evt => showCourseInfo(evt)}>
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
        <div>
          <h1>Your Calender</h1>
          <div className="sub-items">
            {/* <h2>Subheader</h2> */}
            <button>Inbox</button>
            <button>Create Course</button>
          </div>
        </div>

        <Calendar dateCellRender={dateCellRender} />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};
export default connect(mapStateToProps, { setSelectedCourse })(
  InstructorCalender
);
