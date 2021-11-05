//import actions
import {
  ERROR_ACTION,
  GET_USER_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
} from '../actions/instructorActions';

const initialState = {
  instructor_id: 0,
  user_id: 9,
  rating: 0.5,
  approved: false,
  approved_by: 'Joey',
  instructor_bio: 'lorem ipsum',
  inbox: [],
  course_id: [0],
  course_schedule: [
    {
      id: 0,
      course_id: 0,
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
      start_time: '5:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '6:00pm',
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
