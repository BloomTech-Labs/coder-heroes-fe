import {
  GET_CHILDREN_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
} from '../actions/parentActions';

export const initialState = {
  parents: [
    { id: 0, user_id: 0 },
    { id: 1, user_id: 1 },
    { id: 2, user_id: 2 },
  ],

  children: [
    { id: 0, parent_id: 0, user_id: 3, username: 'Joannsson', age: 7 },
    { id: 1, parent_id: 1, user_id: 4, username: 'Jordansdaughter', age: 9 },
    { id: 2, parent_id: 1, user_id: 5, username: 'Jordansson', age: 12 },
  ],

  enrollments: [
    { id: 0, child_id: 0, course_id: 0, completed: false },
    { id: 1, child_id: 0, course_id: 0, completed: false },
    { id: 2, child_id: 0, course_id: 0, completed: false },
  ],

  courses: [
    {
      id: 0,
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
      prereq: '0',
    },
    {
      id: 1,
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
      prereq: '0',
    },
    {
      id: 2,
      size: 5,
      description: 'lorem ipsup',
      subject: 'lorem ipsum',
      prereq: '0',
    },
  ],
  sessions: [
    {
      id: 0,
      course_id: 0,
      start_time: '5:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '6:00pm',
      location: 'Alabamma',
    },
    {
      id: 1,
      course_id: 1,
      start_time: '6:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '7:00pm',
      location: 'Alabamma',
    },
    {
      id: 2,
      course_id: 2,
      start_time: '7:00pm',
      start_date: '10-10-2010',
      end_date: '10-10-2010',
      end_time: '8:00pm',
      location: 'Alabamma',
    },
  ],

  inbox: [
    { id: 0, user_id: 0 },
    { id: 1, user_id: 3 },
    { id: 2, user_id: 8 },
  ],

  messages: [
    {
      id: 0,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Help with Homework?',
      read: true,
      message: 'I need the answers to the assignment please.',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      id: 1,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: "What's my grade?",
      read: true,
      message: 'Hey Ms. Teacher can you tell me my grade?',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      id: 2,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Going to need to cancel.',
      read: false,
      message: 'My child has to miss the class',
      inbox_id: 1,
      sender_id: 2,
    },
    {
      id: 3,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Kid is sick',
      read: true,
      message: 'Can we get a refund for this class?',
      inbox_id: 2,
      sender_id: 3,
    },
    {
      id: 4,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'When is class?',
      read: false,
      message: 'I noticed the time was funky and had to ask.',
      inbox_id: 1,
      sender_id: 5,
    },
    {
      id: 5,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Is this a yoga course?',
      read: false,
      message: 'How is yoga and coding taught together?',
      inbox_id: 3,
      sender_id: 7,
    },
    {
      id: 6,
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Where is my achievement?',
      read: false,
      message: "my achievement didn't pop up when I did class.",
      inbox_id: 0,
      sender_id: 1,
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
