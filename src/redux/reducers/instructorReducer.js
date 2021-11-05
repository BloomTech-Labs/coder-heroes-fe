//import actions
import {
  ERROR_ACTION,
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
} from '../actions/instructorActions';

const initialState = {
  instructor_id: 1,
  instructor_bio: 'hh',
  inbox: [],
  course_id: [1, 2],
  course_schedule: [
    {
      course_id: 1,
      start_time: '6:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '7:00pm',
      location: 'Alabamma',
    },
    {
      course_id: 2,
      start_time: '7:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '8:00pm',
      location: 'Alabamma',
    },
  ],
};

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return state;
    case GET_USER_ACTION:
      return state;
    case GET_INBOX_ACTION:
      return state;

    default:
      return state;
  }
};

export default instructorReducer;
