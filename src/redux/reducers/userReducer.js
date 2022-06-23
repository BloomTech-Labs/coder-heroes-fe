import {
  GET_CURRENT_USER,
  GET_INBOX_ACTION,
  SET_ERROR,
  POST_INBOX_ACTION,
  POST_INBOX_SUCCESS,
} from '../actions/userActions';

const initialState = {
  currentUser: {},
  errorMessage: '',
  Messages: [
    {
      message: 'Hello World',
      sent_at: '2011-01-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 2,
      title: 'Hello World',
    },
    {
      message: 'Hello World2',
      sent_at: '2015-03-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 3,
      title: 'Hello World',
    },
    {
      message: 'Hello World3',
      sent_at: '2015-06-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: '4',
      title: 'Hello World',
    },
    {
      message: 'Hello World4',
      sent_at: '2015-03-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 5,
      title: 'Hello World',
    },
    {
      message: 'Hello World5',
      sent_at: '2016-01-01T00:00:00Z',
      profile_id: 1,
      read: false,
      sender_id: 6,
      title: 'Hello World',
    },
    {
      message: 'Hello World6',
      sent_at: '2016-01-21T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 7,
      title: 'Hello World',
    },
    {
      message: 'Hello World7',
      sent_at: '2016-02-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 8,
      title: 'Hello World',
    },
    {
      message: 'Hello World8',
      sent_at: '2016-07-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 9,
      title: 'Hello World',
    },
    {
      message: 'Hello World9',
      sent_at: '2016-04-01T00:00:00Z',
      profile_id: 3,
      read: false,
      sender_id: 10,
      title: 'Hello World',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case GET_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    case POST_INBOX_ACTION:
      return {
        ...state,
        inbox: action.payload,
      };
    case POST_INBOX_SUCCESS:
      return {
        ...state,
        inbox: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
