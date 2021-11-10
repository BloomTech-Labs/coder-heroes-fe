//import actions
import {
  ERROR_ACTION,
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
} from '../actions/instructorActions';

const initialState = {
  instructor_id: 3,
  user_id: 9,
  rating: 3,
  approved: true,
  approved_by: 1,
  instructor_bio: 'I love making content for people to enjoy!',
  inbox: [],
  course_id: [3],
  course_schedule: [
    {
      id: 0,
      course_id: 3,
      size: 12,
      description: 'Welcome to Python!',
      subject: 'Intro to Python',
      start_time: '5:00pm',
      start_date: '11-10-2021',
      end_date: '11-10-2021',
      end_time: '6:00pm',
      location: 'https://zoom.us/my/haleyh',
    },
    {
      id: 1,
      course_id: 0,
      size: 12,
      description: 'Welcome to Python!',
      subject: 'Intro to JavaScript',
      start_time: '5:00pm',
      start_date: '11-19-2021',
      end_date: '11-19-2021',
      end_time: '6:00pm',
      location: 'https://zoom.us/my/haleyh',
    },
    {
      id: 2,
      course_id: 1,
      size: 12,
      description: 'Welcome to Python!',
      subject: 'Intro to CSS',
      start_time: '6:00pm',
      start_date: '11-19-2021',
      end_date: '11-19-2021',
      end_time: '7:00pm',
      location: 'https://zoom.us/my/haleyh',
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
