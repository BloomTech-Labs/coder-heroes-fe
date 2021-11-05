import {
  GET_CHILDREN_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
} from '../actions/parentActions';

export const initialState = {
  parent_id: '',
  user_id: '',

  children: [
    {
      user_id: '',
      username: '',
      age: '',
    },
  ],

  enrollments: [
    {
      enrollment_id: '',
      child_id: '',
      course_id: '',
      completed: false,
    },
  ],

  courses: [
    {
      course_id: '',
      size: '',
      description: '',
      subject: '',
      prereq: '',
    },
  ],

  sessions: [
    {
      course_id: '',
      start_time: '',
      start_date: '',
      end_date: '',
      end_time: '',
      location: '',
      instructor_id: '',
    },
  ],

  inbox: [
    {
      inbox_id: '',
      user_id: '',
    },
  ],

  messages: [
    {
      message_id: '',
      sent_at: '',
      title: '',
      read: '',
      message: '',
      inbox_id: '',
      sender_id: '',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_CHILDREN_ACTION:
      return {
        ...state,
        children: action.payload,
      };
    case GET_SESSIONS_ACTION:
      return {
        ...state,
        sessions: action.payload,
      };
    case GET_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
