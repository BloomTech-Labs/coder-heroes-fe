import { parentDummyData } from '../../parentDummyData';
import {
  ADD_TO_CART,
  CANCEL_CART_ITEM,
  CLEAR_CART,
  FETCH_BOOKINGS_FAILURE,
  FETCH_BOOKINGS_START,
  FETCH_BOOKINGS_SUCCESS,
  GET_CHILDREN_ACTION,
  GET_CHILDREN_SUCCESS,
  GET_COURSES_ACTION,
  GET_INBOX_ACTION,
  GET_SESSIONS_ACTION,
  SIGNUP_COURSE_ACTION,
  GET_NEWSFEEDS_PARENT,
} from '../actions/parentActions';

const removeCartItem = (cart, booking) => {
  for (let i = 0; i < cart.length; i++) {
    if (
      cart[i].child_id === booking.child_id &&
      cart[i].schedule_id === booking.schedule_id
    ) {
      cart.splice(i, 1);
      break;
    }
  }
  return cart;
};

const reducer = (state = parentDummyData, action) => {
  switch (action.type) {
    case GET_COURSES_ACTION:
      return {
        ...state,
        availableCourses: action.payload,
      };
    case GET_CHILDREN_ACTION:
      return {
        ...state,
        children: action.payload,
      };
    case GET_CHILDREN_SUCCESS:
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
    case SIGNUP_COURSE_ACTION:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_BOOKINGS_START:
      return {
        ...state,
        bookings: {
          isFetching: true,
          bookings: [],
          error: '',
        },
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: {
          isFetching: false,
          bookings: action.payload,
          error: '',
        },
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        bookings: {
          isFetching: false,
          bookings: [],
          error: action.payload,
        },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CANCEL_CART_ITEM:
      return {
        ...state,
        cart: removeCartItem([...state.cart], action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case GET_NEWSFEEDS_PARENT:
      //if we are no longer importing dummy data we will need to double check and new state does have newsfeed inside
      return {
        ...state,
        newsfeed: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
