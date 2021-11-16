import {
  GET_CHILDREN_ACTION,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
} from '../actions/parentActions';

export const initialState = {
  parents: [{ user_id: 0 }, { user_id: 1 }, { user_id: 2 }],

  children: [
    { parent_id: 0, user_id: 3, username: 'Joannsson', age: 7 },
    { parent_id: 1, user_id: 4, username: 'Jordansdaughter', age: 9 },
    { parent_id: 1, user_id: 5, username: 'Jordansson', age: 12 },
  ],

  enrollments: [
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
    { child_id: 0, course_id: 0, completed: false },
  ],

  courses: [
    {
      size: 5,
      description: 'Python Desc',
      subject: 'Python subject',
    },
    {
      size: 5,
      description: 'JS desc',
      subject: 'Js subject',
    },
    {
      size: 5,
      description: 'React Desc',
      subject: 'React subject',
    },
  ],

  schedules: [
    {
      course_id: 1,
      instructor_id: 1,
    },
    {
      course_id: 2,
      instructor_id: 2,
    },
    {
      course_id: 3,
      instructor_id: 3,
    },
  ],

  sessions: [
    {
      course: 'Php',
      start_time: '10:00pm',
      start_date: '10-10-2021',
      end_date: '10-10-2021',
      end_time: '6:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 1,
    },
    {
      course: 'react',
      start_time: '6:00pm',
      start_date: '11-06-2021',
      end_date: '11-09-2021',
      end_time: '9:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 2,
    },
    {
      course: 'Javascript',
      start_time: '9:00pm',
      start_date: '11-10-2021',
      end_date: '11-12-2021',
      end_time: '12:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 3,
    },
    {
      course: 'Redux',
      start_time: '10:00pm',
      start_date: '11-10-2021',
      end_date: '11-12-2021',
      end_time: '11:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 4,
    },
    {
      course: 'Python',
      start_time: '9:00pm',
      start_date: '12-09-2021',
      end_date: '12-12-2021',
      end_time: '12:00pm',
      location: 'https://zoom.us/my/john123',
      schedule_id: 6,
    },
  ],

  prereqs: [
    { course_id: 1, precourse_id: 1 },
    { course_id: 2, precourse_id: 2 },
    { course_id: 3, precourse_id: 3 },
  ],

  inbox: [{ user_id: 0 }, { user_id: 3 }, { user_id: 8 }],

  messages: [
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Help with Homework?',
      read: true,
      message: 'I need the answers to the assignment please.',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: "What's my grade?",
      read: true,
      message: 'Hey Ms. Teacher can you tell me my grade?',
      inbox_id: 0,
      sender_id: 1,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Going to need to cancel.',
      read: false,
      message: 'My child has to miss the class',
      inbox_id: 1,
      sender_id: 2,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Kid is sick',
      read: true,
      message: 'Can we get a refund for this class?',
      inbox_id: 2,
      sender_id: 3,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'When is class?',
      read: false,
      message: 'I noticed the time was funky and had to ask.',
      inbox_id: 1,
      sender_id: 5,
    },
    {
      sent_at: '2021-11-02T01:51:39+00:00',
      title: 'Is this a yoga course?',
      read: false,
      message: 'How is yoga and coding taught together?',
      inbox_id: 3,
      sender_id: 7,
    },
    {
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
