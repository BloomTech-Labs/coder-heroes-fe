import { combineReducers } from 'redux';
import parentReducer from './parentReducer';
import instructorReducer from './instructorReducer';
import adminReducers from './adminReducer';
import userReducer from './userReducer';
import childReducer from './childReducer';
import coursesReducers from './coursesReducers';

const rootReducer = combineReducers({
  parentReducer,
  instructorReducer,
  adminReducers,
  userReducer,
  childReducer,
  coursesReducers,
});

export default rootReducer;
